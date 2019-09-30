import React from 'react';
import './Slide.css';

const slide = props => {
  let slideClasses = ['Slide'];

  if (props.selected) {
    slideClasses.push('selected');
  }

  return (
    <div className={slideClasses.join(' ')} onClick={props.slideSelected}>
      <img src={props.url} alt={props.label} />
      <span>{props.label}</span>
    </div>
  );
};

export default slide;
