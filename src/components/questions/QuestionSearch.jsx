import React, { useState, useEffect } from 'react';
// import './questions.css';

function QuestionSearch({ handleSearch }) {
  const [searchingQuestions, setSearchingQuestions] = useState('');

  const submitSearch = (event) => {
    event.preventDefault();
    if (searchingQuestions.length >= 3) {
      handleSearch(searchingQuestions);
      setSearchingQuestions('');
    } else {
      setSearchingQuestions('');
    }
  };

  const enterSearch = (event) => {
    setSearchingQuestions(event.target.value);
    if (searchingQuestions.length >= 3) {
      handleSearch(event.target.value);
    } else {
      handleSearch([]);
    }
  };

  return (
    <div className="topnav">
      <form className="wrap" onSubmit={submitSearch}>
        <div>
          <input type="text" className="searchTerm" placeholder="Have a question? Search for answers..." value={searchingQuestions} onChange={enterSearch} />
          <button className="search-button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
export default QuestionSearch;
