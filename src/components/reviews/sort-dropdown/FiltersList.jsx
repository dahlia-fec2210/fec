import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import logInteraction from '../logInteraction.jsx';

export default function FiltersList({ filters, removeFilter, currentProduct }) {
  const handleClearFilter = (e) => {
    e.preventDefault();
    logInteraction(e.target.id, [currentProduct]);
    removeFilter(e.target.value);
  };

  return (
    <div className="filters-list">
      {filters.map((filter) => (
        <button
          type="button"
          key={filter}
          id={`remove-${filter.split(' ').join('-')}-filter`}
          className="filter-button"
          value={filter}
          onClick={handleClearFilter}
        >
          <AiOutlineClose size={11} className="filter-button-x" />
          {' '}
          {filter}
          {' '}
          stars
        </button>
      ))}
      {filters.length > 1 ? (
        <button
          type="button"
          className="filter-button filter-button-clear"
          value="clear"
          onClick={handleClearFilter}
        >
          <AiOutlineClose size={11} className="filter-button-x" />
          {' '}
          Clear filters
        </button>
      ) : null}
    </div>
  );
}
