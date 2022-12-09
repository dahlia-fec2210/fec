import React from 'react';
import SortByButton from './SortByButton.jsx';
import SortOptions from './SortOptions.jsx';
import FiltersList from './FiltersList.jsx';

const { useState, useEffect } = React;

function SortByDropdown({
  reviewsListLength, changeSortOrder, currentProduct, filters, removeFilter,
}) {
  const [sortOption, setSortOption] = useState(null);
  const [showDropdown, setShowDropdown] = useState(null);
  const toggleDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handleSelection = (selection) => {
    switch (selection) {
      case (sortOption):
        setShowDropdown(!showDropdown);
        break;
      case 'relevance':
        setSortOption(selection);
        changeSortOrder('relevant');
        setShowDropdown(!showDropdown);
        break;
      case 'newest':
        setSortOption(selection);
        changeSortOrder('newest');
        setShowDropdown(!showDropdown);
        break;
      case 'helpfulness':
        setSortOption(selection);
        changeSortOrder('helpful');
        setShowDropdown(!showDropdown);
        break;
      default:
        break;
    }
  };
  window.onclick = (event) => {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.arrowdown')) {
      if (showDropdown) {
        setShowDropdown(!showDropdown);
      }
    }
  };

  useEffect(() => {
    setSortOption('relevance');
    setShowDropdown(false);
  }, [currentProduct]);

  return (
    <div className="sort-by">
      <span>
        {reviewsListLength}
        {' '}
        reviews, sorted by
        {' '}
      </span>
      <div className="dropdown">
        <SortByButton toggleDropdown={toggleDropdown} sortOption={sortOption} />
        {(showDropdown)
          ? <SortOptions handleSelection={handleSelection} />
          : null }

      </div>
      {filters.length > 0 ? <FiltersList filters={filters} removeFilter={removeFilter} /> : null}
    </div>
  );
}

export default SortByDropdown;
