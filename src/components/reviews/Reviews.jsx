import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import MoreReviewsButton from './MoreReviewsButton.jsx';
import SortByDropdown from './sort-dropdown/SortByDropdown.jsx';
import NewReviewModal from './new-review-modal/NewReviewModal.jsx';
import ProductBreakdown from './product-breakdown/ProductBreakdown.jsx';
import logInteraction from './logInteraction.js';

const { useState, useEffect, useRef } = React;
const serverRoute = `http://localhost:${process.env.PORT}`;

function Reviews({ currentProduct, reviewsRef }) {
  const [allReviews, setAllReviews] = useState(null);
  const [listedReviews, setListedReviews] = useState(null);
  const [metaData, setMetaData] = useState(null);
  const [itemCount, setItemCount] = useState(2);
  const [sortBy, setSortBy] = useState('relevant');
  const [modal, setModal] = useState(false);
  const [filters, setFilters] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState(null);

  const bottomReviewsRef = useRef(null);

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

  const filterReviews = (newFilters, unfilteredList) => {
    if (newFilters.length === 0) {
      setFilteredReviews(unfilteredList);
      setListedReviews(unfilteredList.slice(0, itemCount));
      return;
    }
    const newFiltered = unfilteredList.filter((review) => {
      const rating = String(review.rating);
      return newFilters.includes(rating);
    });
    setFilteredReviews(newFiltered);
    setListedReviews(newFiltered.slice(0, itemCount));
  };

  const addTwoItems = () => {
    const newItemCount = itemCount + 2;
    setItemCount(newItemCount);
    const newReviewSet = filteredReviews.slice(0, newItemCount);
    setListedReviews(newReviewSet);
  };

  const reportReview = (reviewId, index) => {
    const route = `${serverRoute}/reviews/${reviewId}/report`;
    axios.put(route)
      .then(() => {
        const newlistedReviews = listedReviews;
        newlistedReviews.splice(index, 1);
        setListedReviews(newlistedReviews);
        setItemCount(itemCount - 1);
        setAllReviews(allReviews.filter((review) => review.reveiw_id !== reviewId));
      });
  };

  const changeSortOrder = (newSortOrder) => {
    setSortBy(newSortOrder);
    fetchReviews(currentProduct, pageNumber, pageItemCount, newSortOrder)
      .then((result) => {
        setAllReviews(result.data.results);
        filterReviews(filters, result.data.results);
      });
  };

  const addFilter = (newFilter) => {
    if (!filters.includes(newFilter)) {
      const newFilters = [...filters, newFilter];
      setFilters(newFilters);
      filterReviews(newFilters, allReviews);
    }
  };

  const removeFilter = (filterToRemove) => {
    if (filterToRemove === 'clear') {
      setFilters([]);
      setFilteredReviews(allReviews);
      filterReviews([], allReviews);
      return;
    }
    const newFilters = filters.filter((filter) => filter !== filterToRemove);
    setFilters(newFilters);
    filterReviews(newFilters, allReviews);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    logInteraction(e.target.id, [currentProduct]);
    toggleModal();
  };

  useEffect(() => {
    fetchReviews(currentProduct, pageNumber, pageItemCount, sortBy)
      .then((result) => {
        setItemCount(2);
        setAllReviews(result.data.results);
        setFilteredReviews(result.data.results);
        setListedReviews(result.data.results.slice(0, 2));
      });
    fetchMetaData(currentProduct)
      .then((result) => {
        setMetaData(result.data);
      });
  }, [currentProduct]);

  if (listedReviews) {
    return (
      <>
        <div className="reviews-container" ref={reviewsRef}>
          {metaData && <ProductBreakdown metaData={metaData} addFilter={addFilter} />}
          <div className="review-list-container">
            <SortByDropdown
              reviewsListLength={allReviews.length}
              changeSortOrder={changeSortOrder}
              currentProduct={currentProduct}
              filters={filters}
              removeFilter={removeFilter}
            />
            <ReviewsList
              reviews={listedReviews}
              reportReview={reportReview}
              bottomReviewsRef={bottomReviewsRef}
              currentProduct={currentProduct}
            />
            <div className="review-btns-container">
              {itemCount > listedReviews.length
                ? null
                : (
                  <MoreReviewsButton
                    addTwoItems={addTwoItems}
                    bottomReviewsRef={bottomReviewsRef}
                    currentProduct={currentProduct}
                  />
                )}
              <button
                onClick={handleAddClick}
                type="button"
                id="add-new-review-button"
                className="new-review-btn"
              >
                Add New Review
              </button>
              {modal && (
              <NewReviewModal
                toggleModal={toggleModal}
                metaData={metaData}
                currentProduct={currentProduct}
              />
              )}
            </div>
          </div>
        </div>
        <div className="bottom-padding">
          {' '}
        </div>
      </>
    );
  }
}

export default Reviews;
