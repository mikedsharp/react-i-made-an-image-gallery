import React from 'react';
import './Lightbox.css';

const lightbox = props => {
  return (
    <div className="Lightbox">
      <span className="button-previous" onClick={props.previousSlide}>
        &lt;
      </span>
      <div className="slide-container">
        <span className="button-close" onClick={props.closeLightbox}>
          X
        </span>
        <img src={props.url} alt={props.label} />
        <span>{props.label}</span>
      </div>
      <span className="button-next" onClick={props.nextSlide}>
        &gt;
      </span>
    </div>
  );
};

export default lightbox;
