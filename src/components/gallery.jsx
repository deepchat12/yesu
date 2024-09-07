import React, { useState } from "react";
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';



export const Gallery = (props) => {

  const [isOpen, setIsOpen] = useState(false); // State to track if the lightbox is open
  const [photoIndex, setPhotoIndex] = useState(0); // Current image index in the lightbox

  const images = props.data ? props.data.map(d => d.largeImage) : []; // Array of large images for the lightbox

  const openLightbox = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
      <div className="portfolio-items">
        {props.data
          ? props.data.map((d, i) => (
              <div
                key={`${d.title}-${i}`}
                className="col-sm-6 col-md-4 col-lg-4"
                onClick={() => openLightbox(i)} // Open the lightbox on image click
                style={{ cursor: 'pointer' }} // Make it clear the images are clickable
              >
                <img
                  src={d.smallImage}
                  alt={d.title}
                  className="img-fluid"
                  title={d.title}
                />
              </div>
            ))
          : "Loading..."}
      </div>

      {/* Lightbox Section */}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]} // Current image
          nextSrc={images[(photoIndex + 1) % images.length]} // Next image
          prevSrc={images[(photoIndex + images.length - 1) % images.length]} // Previous image
          onCloseRequest={() => setIsOpen(false)} // Close lightbox
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          } // Navigate to the previous image
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          } // Navigate to the next image
        />
      )}
    </div>
        
      </div>
    </div>
  );
};
