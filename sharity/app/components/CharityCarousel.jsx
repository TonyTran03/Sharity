import React from 'react';

const CharityCarousel = () => {
  const charityLogos = [
    '/sharity.png',
    '/sharity.png',
    '/sharity.png',
    '/sharity.png',
    '/sharity.png',
    '/sharity.png',
  ];

  // Duplicate the logos to create a seamless loop effect
  const allLogos = [...charityLogos, ...charityLogos];

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        {allLogos.map((logo, index) => (
          <div key={index} className="carousel-item">
            <img src={logo} alt={`Charity Logo ${index + 1}`} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .carousel-container {
          overflow: hidden;
          position: relative;
          border-radius: 30px; 
          background-color: rgb(254,249,250); 
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 

        }

        .carousel-content {
          display: flex;
          align-items: center;
          animation: scroll 20s linear infinite;
        }


        @media (max-width: 768px) {
          .carousel-container {
            width: 100%; /* Ensure container fits screen width */
            min-height: 50%; /* Adjust based on your design */
          }
          
          .carousel-content {
            animation: scroll 10s linear infinite;
          }

          .carousel-item {
            width: 100px; /* Smaller items for mobile */
            margin: 0 5px;
          }
        }


        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-49%);
          }
        }
      `}</style>
    </div>
  );
};

export default CharityCarousel;
