import React from 'react';
import { IoStar } from 'react-icons/io5';

const { useState } = React;

export default function SelectOverallRating({ overallRating, setOverallRating }) {
  const [hover, setHover] = useState(null);

  const handleClick = (e) => {
    setOverallRating(e.target.value);
  };
  return (
    <div className="select-overall-rating">
      <div>Overall Rating:</div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={handleClick}

            />
            <IoStar
              className="overall-star"
              color={ratingValue <= (hover || overallRating) ? '#ffc107' : '#d4d5d9'}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

// <div id="checkboxes">
//   <div class="checkboxgroup">
//     <label for="my_radio_button_id1">My Label1</label>
//     <input type="radio" name="radio" id="my_radio_button_id1" />
//   </div>
//   <div class="checkboxgroup">
//     <label for="my_radio_button_id2">My Label2</label>
//     <input type="radio" name="radio" id="my_radio_button_id2" />
//   </div>
//   <div class="checkboxgroup">
//     <label for="my_radio_button_id3">My Label3</label>
//     <input type="radio" name="radio" id="my_radio_button_id3" />
//   </div>
// </div>

// product_id
// :
// "37317"

// ratings
// :
// {1: "2", 2: "1", 3: "11", 4: "4", 5: "42"}

// recommended
// :
// {false: "2", true: "58"}

// characteristics
// :
// {Comfort: {…}, Quality: {…}, Size
