import React from 'react';

const descriptors = {
  Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too big'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly loose', 'Runs loose'],
};

export default function CharacteristicsInput({ characteristics, setCharacteristics, metaData }) {
  const prodCharaData = metaData.characteristics;
  const prodCharaNames = Object.keys(prodCharaData);

  const handleClick = (e) => {
    const id = e.target.name;
    const { value } = e.target;
    if (id && value) {
      setCharacteristics({
        ...characteristics,
        [id]: value,

      });
    }
  };
  return (
    <div className="review-select-characteristics">
      {prodCharaNames.map((charaName) => (
        <>
          <div>
            {charaName}
            :
            {' '}
          </div>
          <div className="review-radio-container">
            {descriptors[charaName].map((descriptor, index) => (
              <div className="review-checkboxgroup">
                <label onClick={handleClick} htmlFor={charaName + descriptor}>{descriptor}</label>
                <input onClick={handleClick} type="radio" name={prodCharaData[charaName].id} id={charaName + descriptor} value={index + 1} />
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

// Comfort
// :
// id
// :
// 125054
// value
// :
// "3.7894736842105263"
// [[Prototype]]
// :
// Object

// Quality
// :
// {id: 125055, value: '3.6000000000000000'}
// Size
// :
// {id: 125052, value: '3.2000000000000000'}
// Width
// :
// {id: 125053, value: '3.6500000000000000'}
// [[Prototype]]
// :
// Object
