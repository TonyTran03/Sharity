'use client'
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const MapComponent = () => {
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

        const target = document.getElementById("map");
        if (!target) throw new Error("No map element found");

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

  return <div id="map" style={{ height: "100vh", width: "100%" }}></div>;
};

export default MapComponent;
