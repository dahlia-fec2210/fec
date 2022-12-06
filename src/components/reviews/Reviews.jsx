import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import MoreReviewsButton from './MoreReviewsButton.jsx';
import SortByDropdown from './SortByDropdown.jsx';

const { useState, useEffect } = React;
const serverRoute = `http://localhost:${process.env.PORT}`;

function Reviews({ currentProduct }) {
  const [allReviews, setAllReviews] = useState(null);
  const [reviewsToList, setReviewsToList] = useState(null);
  const [itemCount, setItemCount] = useState(2);
  const [sortBy, setSortBy] = useState('relevant');
  const pageNumber = 1;
  const pageItemCount = 1000;

  const fetchReviews = (productId, page, count, sort) => axios.get(`${serverRoute}/reviews/`, {
    params: {
      product_id: productId,
      page,
      count,
      sort,
    },
  });

  const addTwoItems = () => {
    const newItemCount = itemCount + 2;
    setItemCount(newItemCount);
    const newReviewSet = allReviews.slice(0, newItemCount);
    setReviewsToList(newReviewSet);
  };

  const reportReview = (reviewId, index) => {
    const route = `${serverRoute}/reviews/${reviewId}/report`;
    axios.put(route)
      .then(() => {
        const newReviewsToList = reviewsToList;
        newReviewsToList.splice(index, 1);
        setReviewsToList(newReviewsToList);
        setItemCount(itemCount - 1);
        setAllReviews(allReviews.filter((review) => review.reveiw_id !== reviewId));
      });
  };

  const changeSortOrder = (newSortOrder) => {
    const newItemCount = 2;
    setItemCount(newItemCount);
    setSortBy(newSortOrder);
    fetchReviews(currentProduct, pageNumber, pageItemCount, newSortOrder)
      .then((result) => {
        setAllReviews(result.data.results);
        setReviewsToList(result.data.results.slice(0, newItemCount));
      });
  };

  useEffect(() => {
    fetchReviews(currentProduct, pageNumber, pageItemCount, sortBy)
      .then((result) => {
        setAllReviews(result.data.results);
        setReviewsToList(result.data.results.slice(0, 2));
      });
  }, [currentProduct]);

  if (reviewsToList) {
    return (
      <div className="reviews-container">
        <SortByDropdown changeSortOrder={changeSortOrder} />
        <ReviewsList reviews={reviewsToList} reportReview={reportReview} />
        {itemCount > reviewsToList.length ? null : <MoreReviewsButton addTwoItems={addTwoItems} />}
        {/* need conditional rendering for button */}
      </div>
    );
  }
}

export default Reviews;
