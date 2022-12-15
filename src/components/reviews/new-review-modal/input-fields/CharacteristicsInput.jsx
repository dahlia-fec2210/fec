import React from 'react';
import logInteraction from '../../logInteraction.jsx';

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
      logInteraction(e.target.id, [metaData.product_id]);
      setCharacteristics({
        ...characteristics,
        [id]: Number(value),

      });
    }
  };
  return (
    <div className="review-select-characteristics">
      {prodCharaNames.map((charaName) => (
        <div key={charaName}>
          <div className="select-characteristics-label">
            {charaName}
            :
            {' '}
          </div>
          <div className="review-radio-group">
            {descriptors[charaName].map((descriptor, index) => {
              const id = `${charaName}-${descriptor.split(' ').join('-')}-selector`;
              return (
                <div key={descriptor}>
                  <input onClick={handleClick} type="radio" name={prodCharaData[charaName].id} id={id} value={index + 1} />
                  <label onClick={handleClick} htmlFor={id}>{descriptor}</label>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
