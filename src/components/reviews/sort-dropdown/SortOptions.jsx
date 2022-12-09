import React from 'react';

function SortOptions({ handleSelection }) {
  const handleClick = (e) => {
    e.preventDefault();
    handleSelection(e.target.innerText);
  };
  return (
    <div id="myDropdown" className="dropdown-content">
      <a href="#" onClick={handleClick}>relevance</a>
      <a href="#" onClick={handleClick}>newest</a>
      <a href="#" onClick={handleClick}>helpfulness</a>
    </div>
  );
}

export default SortOptions;
