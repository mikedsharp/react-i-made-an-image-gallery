import React from 'react';
import './SlideFilter.scss';

const slideFilter = props => {
  return (
    <div className="SlideFilter" onKeyUp={props.onFilterChange}>
      <input type="text" />
    </div>
  );
};

export default slideFilter;
