'use client'
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const MapComponent = () => {
  useEffect(() => {
    const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

    const loader = new Loader({
      apiKey: GOOGLE_API_KEY,
      version: "weekly",
      libraries: ["places"],
    });

    loader
      .importLibrary("maps")
      .then(async ({ Map }) => {
        const target = document.getElementById("map");
        if (!target) throw new Error("No map element found");
        const map = new Map(target, {
          center: {
            lat: 43.65107,
            lng: -79.347015,
          },
          mapId: "owo",
          zoom: 12,
        });

        const { AdvancedMarkerElement } = await loader.importLibrary("marker");

        // Function to create a new image element with specified source and size
        function createMarkerImage(src, width, height) {
          const img = document.createElement("img");
          img.src = src;
          img.style.width = width;
          img.style.height = height;
          return img;
        }

// Create initial image elements
let greenOne = createMarkerImage(
  "https://www.pepyempoweringyouth.org/wp-content/uploads/2022/07/Map-pin-1.png",
  "30px",
  "30px"
);
let greenTwo = createMarkerImage(
  "https://www.pepyempoweringyouth.org/wp-content/uploads/2022/07/Map-pin-1.png",
  "30px",
  "30px"
);
let greenThree = createMarkerImage(
  "https://www.pepyempoweringyouth.org/wp-content/uploads/2022/07/Map-pin-1.png",
  "30px",
  "30px"
);
let greenFour = createMarkerImage(
  "https://www.pepyempoweringyouth.org/wp-content/uploads/2022/07/Map-pin-1.png",
  "30px",
  "30px"
);
let greenFive = createMarkerImage(
  "https://www.pepyempoweringyouth.org/wp-content/uploads/2022/07/Map-pin-1.png",
  "30px",
  "30px"
);
let greenSix = createMarkerImage(
  "https://www.pepyempoweringyouth.org/wp-content/uploads/2022/07/Map-pin-1.png",
  "30px",
  "30px"
);

let yellowOne = createMarkerImage(
  "https://grn.solutiosoftware.com/images/stories/solutio/FFD600-yellow.png",
  "30px",
  "30px"
);
let yellowTwo = createMarkerImage(
  "https://grn.solutiosoftware.com/images/stories/solutio/FFD600-yellow.png",
  "30px",
  "30px"
);
let yellowThree = createMarkerImage(
  "https://grn.solutiosoftware.com/images/stories/solutio/FFD600-yellow.png",
  "30px",
  "30px"
);
let yellowFour = createMarkerImage(
  "https://grn.solutiosoftware.com/images/stories/solutio/FFD600-yellow.png",
  "30px",
  "30px"
);
let yellowFive = createMarkerImage(
  "https://grn.solutiosoftware.com/images/stories/solutio/FFD600-yellow.png",
  "30px",
  "30px"
);
let yellowSix = createMarkerImage(
  "https://grn.solutiosoftware.com/images/stories/solutio/FFD600-yellow.png",
  "30px",
  "30px"
);

let redOne = createMarkerImage(
  "https://www.seekpng.com/png/full/109-1093110_clip-art-royalty-free-stock-logos-red-location.png",
  "20px",
  "30px"
);
let redTwo = createMarkerImage(
  "https://www.seekpng.com/png/full/109-1093110_clip-art-royalty-free-stock-logos-red-location.png",
  "20px",
  "30px"
);
let redThree = createMarkerImage(
  "https://www.seekpng.com/png/full/109-1093110_clip-art-royalty-free-stock-logos-red-location.png",
  "20px",
  "30px"
);
let redFour = createMarkerImage(
  "https://www.seekpng.com/png/full/109-1093110_clip-art-royalty-free-stock-logos-red-location.png",
  "20px",
  "30px"
);
let redFive = createMarkerImage(
  "https://www.seekpng.com/png/full/109-1093110_clip-art-royalty-free-stock-logos-red-location.png",
  "20px",
  "30px"
);
let redSix = createMarkerImage(
  "https://www.seekpng.com/png/full/109-1093110_clip-art-royalty-free-stock-logos-red-location.png",
  "20px",
  "30px"
);


        const variations = 1;
        let temp;

        if (variations === 0) {
          temp = greenOne;
          greenOne = yellowOne;
          yellowOne = redOne;
          redOne = temp;

          temp = greenTwo;
          greenTwo = yellowTwo;
          yellowTwo = redTwo;
          redTwo = temp;

          temp = greenThree;
          greenThree = yellowThree;
          yellowThree = redThree;
          redThree = temp;

          temp = greenFour;
          greenFour = yellowFour;
          yellowFour = redFour;
          redFour = temp;

          temp = greenFive;
          greenFive = yellowFive;
          yellowFive = redFive;
          redFive = temp;

          temp = greenSix;
          greenSix = yellowSix;
          yellowSix = redSix;
          redSix = temp;
        }

        if (variations === 1) {
          temp = redOne;
          redOne = yellowOne;
          yellowOne = greenOne;
          greenOne = temp;

          temp = redTwo;
          redTwo = yellowTwo;
          yellowTwo = greenTwo;
          greenTwo = temp;

          temp = redThree;
          redThree = yellowThree;
          yellowThree = greenThree;
          greenThree = temp;

          temp = redFour;
          redFour = yellowFour;
          yellowFour = greenFour;
          greenFour = temp;

          temp = redFive;
          redFive = yellowFive;
          yellowFive = greenFive;
          greenFive = temp;

          temp = redSix;
          redSix = yellowSix;
          yellowSix = greenSix;
          greenSix = temp;
        }

        if (variations === 2) {
          temp = yellowOne;
          yellowOne = redOne;
          redOne = greenOne;
          greenOne = temp;

          temp = yellowTwo;
          yellowTwo = redTwo;
          redTwo = greenTwo;
          greenTwo = temp;

          temp = yellowThree;
          yellowThree = redThree;
          redThree = greenThree;
          greenThree = temp;

          temp = yellowFour;
          yellowFour = redFour;
          redFour = greenFour;
          greenFour = temp;

          temp = yellowFive;
          yellowFive = redFive;
          redFive = greenFive;
          greenFive = temp;

          temp = yellowSix;
          yellowSix = redSix;
          redSix = greenSix;
          greenSix = temp;
        }

        // Create locations array with the updated image elements
        const locations = [
          {
            lat: 43.641918,
            lng: -79.38636,
            content: greenOne,
            title: "A marker using a custom PNG Image",
          },
          {
            lat: 43.686321,
            lng: -79.62178,
            content: yellowOne,
            title: "Another marker",
          },
          {
            lat: 43.68727,
            lng: -79.40145,
            content: redOne,
            title: "marker 3",
          },
          {
            lat: 43.63661,
            lng: -79.40487,
            content: greenTwo,
            title: "marker 4",
          },
          {
            lat: 43.66166,
            lng: -79.38773,
            content: yellowTwo,
            title: "marker 5",
          },
          {
            lat: 43.6560098,
            lng: -79.7438814,
            content: redTwo,
            title: "marker 6",
          },
          {
            lat: 43.6621213,
            lng: -79.3983721,
            content: greenThree,
            title: "marker 7",
          },
          {
            lat: 43.6932709,
            lng: -79.3989988,
            content: yellowThree,
            title: "marker 8",
          },
          {
            lat: 43.7184671,
            lng: -79.373497,
            content: redThree,
            title: "marker 9",
          },
          {
            lat: 43.7280834,
            lng: -79.5123519,
            content: greenFour,
            title: "marker 10",
          },
          {
            lat: 43.760766,
            lng: -79.2214725,
            content: yellowFour,
            title: "marker 11",
          },
          {
            lat: 43.6780507,
            lng: -79.442963,
            content: redFour,
            title: "marker 12",
          },
          {
            lat: 43.8786601,
            lng: -78.8632868,
            content: greenFive,
            title: "marker 13",
          },
          {
            lat: 43.6625234,
            lng: -79.3328154,
            content: yellowFive,
            title: "marker 14",
          },
          {
            lat: 43.6886263,
            lng: -79.3970435,
            content: redFive,
            title: "marker 15",
          },
          {
            lat: 43.6527445,
            lng: -79.3746734,
            content: greenSix,
            title: "marker 16",
          },
          {
            lat: 43.6633732,
            lng: -79.3663599,
            content: yellowSix,
            title: "marker 17",
          },
          {
            lat: 43.6625234,
            lng: -79.3328154,
            content: redSix,
            title: "marker 18",
          },
        ];

        // Add markers to the map
        locations.forEach((location) => {
          new AdvancedMarkerElement({
            map,
            position: { lat: location.lat, lng: location.lng },
            content: location.content,
            title: location.title,
          });
        });
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, []);

  return <div id="map" style={{ height: "100vh", width: "100%" }}></div>;
};

export default MapComponent;