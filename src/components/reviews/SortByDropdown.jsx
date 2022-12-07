import React from 'react';

function SortByDropdown({ reviewsListLength, changeSortOrder }) {
  const handleChange = (e) => {
    changeSortOrder(e.target.value);
  };
  return (
    <>
      <label>
        {reviewsListLength}
        {' '}
        reviews, sorted by
        {' '}
      </label>
      <select name="sortBy" id="SortBy" onChange={handleChange}>
        <option value="relevant">Relevance</option>
        <option value="newest">Newest</option>
        <option value="helpful">Helpfulness</option>
      </select>
    </>
  );
}

export default SortByDropdown;
