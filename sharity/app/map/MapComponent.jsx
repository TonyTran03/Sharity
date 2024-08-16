'use client'
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const MapComponent = () => {
  const mapRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const initializeMap = async () => {
      try {
        const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

        const loader = new Loader({
          apiKey: GOOGLE_API_KEY,
          version: "weekly",
          libraries: ["places"],
        });

        const { Map } = await loader.importLibrary("maps");

        const target = mapRef.current;
        if (!target) throw new Error("No map element found");

        const { SearchBox } = await loader.importLibrary("places");

        // Get user's current location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            const map = new Map(target, {
              center: userLocation,
              mapId: "bestRivenOTP",
              zoom: 16,
            });

            const { AdvancedMarkerElement } = await loader.importLibrary("marker");
            const { PlacesService } = await loader.importLibrary("places");

            // Create the search box and link it to the UI element
            const input = inputRef.current;
            const searchBox = new SearchBox(input);
            map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);

            // Bias the SearchBox results towards current map's viewport
            map.addListener("bounds_changed", () => {
              searchBox.setBounds(map.getBounds());
            });

            // Listen for the event fired when the user selects a prediction and retrieve more details for that place
            searchBox.addListener("places_changed", () => {
              const places = searchBox.getPlaces();

              if (places.length === 0) {
                return;
              }

              // Clear out the old markers
              // markers.forEach((marker) => marker.setMap(null));
              // markers = [];

              // For each place, get the icon, name, and location.
              const bounds = new window.google.maps.LatLngBounds();
              places.forEach((place) => {
                if (!place.geometry || !place.geometry.location) {
                  console.log("Returned place contains no geometry");
                  return;
                }

                new AdvancedMarkerElement({
                  map,
                  position: place.geometry.location,
                  title: place.name,
                  content: document.createElement('div'), // Placeholder for your custom marker
                });

                if (place.geometry.viewport) {
                  // Only geocodes have viewport.
                  bounds.union(place.geometry.viewport);
                } else {
                  bounds.extend(place.geometry.location);
                }
              });
              map.fitBounds(bounds);
            });

            // Perform the charity search around the user's location
            const service = new PlacesService(map);

            const request = {
              location: userLocation,
              radius: '5000', // Adjust the radius as needed (in meters)
              keyword: 'charity',
            };

            service.nearbySearch(request, (results, status) => {
              if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                results
                  .filter((place) => {
                    // Additional filtering logic
                    const charityKeywords = ["charity", "non-profit", "foundation", "ngo"];
                    return charityKeywords.some(keyword => place.name.toLowerCase().includes(keyword));
                  })
                  .forEach((place) => {
                    new AdvancedMarkerElement({
                      map,
                      position: place.geometry.location,
                      title: place.name,
                      content: document.createElement('div'), // Placeholder for your custom marker
                    });
                  });
              }
            });
          });
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      } catch (e) {
        console.error(e.message);
      }
    };

    initializeMap();
  }, []);

  return (
    <div>
      <input
        id="pac-input"
        className="controls"
        type="text"
        placeholder="Search Box"
        ref={inputRef}
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `10px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
          position: `absolute`,
          left: `50%`,
          top: `10px`,
          transform: `translateX(-50%)`
        }}
      />
      <div ref={mapRef} id="map" style={{ height: "100vh", width: "100%" }}></div>
    </div>
  );
};

export default MapComponent;
