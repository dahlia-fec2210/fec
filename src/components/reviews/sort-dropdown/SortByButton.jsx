import React from 'react';
import logInteraction from '../logInteraction.jsx';

function SortByButton({ toggleDropdown, sortOption, currentProduct }) {
  const handleClick = (e) => {
    e.preventDefault();
    logInteraction(e.target.id, [currentProduct]);
    toggleDropdown();
  };
  return (
    <button type="button" id="sort-by-dropdown-btn" onClick={handleClick} className="dropbtn">
      {sortOption}
      {' '}
      <i className="fa-sharp fa-solid fa-angle-down arrowdown" />
    </button>
  );
}

export default SortByButton;
