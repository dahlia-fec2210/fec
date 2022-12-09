import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import MoreReviewsButton from './MoreReviewsButton.jsx';
import SortByDropdown from './sort-dropdown/SortByDropdown.jsx';
import NewReviewModal from './new-review-modal/NewReviewModal.jsx';
import ProductBreakdown from './product-breakdown/ProductBreakdown.jsx';

const { useState, useEffect } = React;
const serverRoute = `http://localhost:${process.env.PORT}`;

function Reviews({ currentProduct }) {
  const [allReviews, setAllReviews] = useState(null);
  const [reviewsToList, setReviewsToList] = useState(null);
  const [metaData, setMetaData] = useState({});
  const [itemCount, setItemCount] = useState(2);
  const [sortBy, setSortBy] = useState('relevant');
  const [modal, setModal] = useState(false);

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

  const fetchMetaData = (productId) => axios.get(`${serverRoute}/reviews/meta`, {
    params: {
      product_id: productId,
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

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    toggleModal();
  };

  useEffect(() => {
    fetchReviews(currentProduct, pageNumber, pageItemCount, sortBy)
      .then((result) => {
        setItemCount(2);
        setAllReviews(result.data.results);
        setReviewsToList(result.data.results.slice(0, 2));
      });
    fetchMetaData(currentProduct)
      .then((result) => {
        setMetaData(result.data);
      });
  }, [currentProduct]);

  if (reviewsToList) {
    return (
      <div className="reviews-container">
        <ProductBreakdown metaData={metaData} />
        <SortByDropdown
          reviewsListLength={allReviews.length}
          changeSortOrder={changeSortOrder}
          currentProduct={currentProduct}
        />
        <ReviewsList reviews={reviewsToList} reportReview={reportReview} />
        {itemCount > reviewsToList.length ? null : <MoreReviewsButton addTwoItems={addTwoItems} />}
        <button onClick={handleAddClick}>Add New Review</button>
        {modal && (
        <NewReviewModal
          toggleModal={toggleModal}
          metaData={metaData}
          currentProduct={currentProduct}
        />
        )}
      </div>
    );
  }
}

export default Reviews;
