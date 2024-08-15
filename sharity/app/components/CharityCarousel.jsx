import React from 'react';

const CharityCarousel = () => {
  const charityLogos = [
    '/logos/sharity.png',
    '/logos/bhf.png',
    '/logos/pngtree-hand-shake-social-charity-logo-png-image_5888875.png',
    '/logos/ray-of-hope.png',
    '/logos/stc.png',
  ];


  
  return (
    <div className="carousel-container">
      <div className="carousel-content">
        {charityLogos.map((logo, index) => (
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
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); 
          
        }

        .carousel-content {
          display: flex;
          align-items: center;
          animation: scroll 15s linear infinite;
        }

        .carousel-item {
          flex: 0 0 auto;
          width: 350px;
          margin: 0 10px;
        }



                @media (max-width: 768px) {
          .carousel-container {
            width: 100%; 
            min-height: 50%; 
          }
          
          .carousel-content {
            animation: scroll 10s linear infinite;
          }

          .carousel-item {
            width: 100px; 
            margin: 0 5px;
          }
        }
        @keyframes scroll {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default CharityCarousel;
