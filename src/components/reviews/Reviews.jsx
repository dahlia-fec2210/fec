import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import MoreReviewsButton from './MoreReviewsButton.jsx';

const { useState, useEffect } = React;
const serverRoute = `http://localhost:${process.env.PORT}`;

function Reviews({ currentProduct }) {
  const [allReviews, setAllReviews] = useState(null);
  const [pageCount, setPageCount] = useState(1);
  const [itemCount, setItemCount] = useState(2);
  const [sortBy, setSortBy] = useState('relevant');

  const fetchReviews = (productId, page, count, sort) => axios.get(`${serverRoute}/reviews/`, {
    params: {
      product_id: productId,
      page,
      count,
      sort,
    },
  });

  const addTwoItems = () => {
    const newPageCount = pageCount + 1;
    setItemCount(itemCount + 2);
    setPageCount(newPageCount);
    fetchReviews(currentProduct, newPageCount, 2, sortBy)
      .then((results) => {
        setAllReviews([...allReviews, ...results.data.results]);
      });
  };
  const reportReview = (reviewId, index) => {
    const route = `${serverRoute}/reviews/${reviewId}/report`;
    axios.put(route)
      .then(() => {
        const newReviews = allReviews;
        newReviews.splice(index, 1);
        setAllReviews(newReviews);
        setItemCount(itemCount - 1);
      });
  };

  useEffect(() => {
    fetchReviews(currentProduct, pageCount, 2, sortBy)
      .then((result) => {
        setAllReviews(result.data.results);
      });
  }, [currentProduct]);

  if (allReviews) {
    return (
      <>
        <ReviewsList reviews={allReviews} reportReview={reportReview} />
        {itemCount > allReviews.length ? null : <MoreReviewsButton addTwoItems={addTwoItems} />}
        {/* need conditional rendering for button */}
      </>
    );
  }
}

export default Reviews;
