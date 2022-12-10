import React from 'react';
import _ from 'lodash';
import CharacteristicBar from './CharacteristicBar.jsx';

const descriptors = {
  Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too big'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly loose', 'Runs loose'],
};

export default function CharacteristicBreakdown({ characteristics }) {
  return (

    <div className="char-bars-container">

      {_.map(characteristics, (data, characteristic) => {
        const percentage = _.round((data.value / 5) * 100, 2);
        const left = descriptors[characteristic][0];
        const middle = descriptors[characteristic][2];
        const right = descriptors[characteristic][4];
        return (
          <div key={data.id} className="char-bd-container">
            <div className="char-bar-label">
              {characteristic}
              :
              {' '}
            </div>
            <CharacteristicBar percentage={percentage} />
            <div className="bar-descriptors">
              <div className="bar-descriptor">{left}</div>
              {middle === 'Perfect' && <div className="bar-descriptor">{middle}</div>}
              <div className="bar-descriptor">{right}</div>
            </div>
          </div>
        );
      })}

    </div>
  );
}
