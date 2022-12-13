import React, { useState, useEffect } from 'react';
import './questions.css';

function QuestionSearch({ handleSearch }) {
  const [searchingQuestions, setSearchingQuestions] = useState('');

  const submitSearch = (event) => {
    event.preventDefault();
    // console.log(searchingQuestions, 'event target is ');
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
      // console.log('only when length of searched is greater than 3');
      handleSearch(event.target.value);
    } else {
      handleSearch([]);
    }
  };

  return (
    <div className="topnav">
      <form className="wrap" onSubmit={submitSearch}>
        {/* <div className="search-bar"> */}
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
