import React from 'react';

export default function SelectRecommend({ setRecommend }) {
  const handleClick = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="review-select-recommend">
      <div>Would you recommend this product?</div>
      <label onClick={handleClick}>
        Yes
      </label>
      <input type="radio" name="recommend" value />
      <label onClick={handleClick}>
        <input type="radio" name="recommend" value={false} />
        No
      </label>

    </div>
  );
}
{ /* <div class="checkboxgroup">
    <label for="my_radio_button_id1">My Label1</label>
    <input type="radio" name="radio" id="my_radio_button_id1" />
  </div>
  <div class="checkboxgroup">
    <label for="my_radio_button_id2">My Label2</label>
    <input type="radio" name="radio" id="my_radio_button_id2" />
  </div>
  <div class="checkboxgroup">
    <label for="my_radio_button_id3">My Label3</label>
    <input type="radio" name="radio" id="my_radio_button_id3" />
  </div> */ }
