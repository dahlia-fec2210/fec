import React from 'react';

function SortByButton({ toggleDropdown, sortOption }) {
  return (
    <button type="button" onClick={toggleDropdown} className="dropbtn">
      {sortOption}
      {' '}
      <i className="fa-sharp fa-solid fa-angle-down arrowdown" />
    </button>
  );
}

export default SortByButton;
