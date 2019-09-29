import React from 'react';
import './Slide.css';

const slide = props => {
  let slideStyles = 'Slide ' + (props.selected ? 'selected' : '');
  return (
    <div className={slideStyles} onClick={props.slideSelected}>
      <img src={props.url} alt={props.label} />
      <span>{props.label}</span>
    </div>
  );
};

export default slide;
