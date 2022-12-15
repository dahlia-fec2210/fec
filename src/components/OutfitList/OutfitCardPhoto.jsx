import React from 'react';

function OutfitCardPhoto({ photo, clothingPiece }) {
  return (
    <img className="related-outfit-photo" src={photo || 'https://img.ltwebstatic.com/images3_pi/2022/04/06/16492430704a5786a3329d6838490cfcc903aa6996_thumbnail_600x.webp'} alt={clothingPiece} />
  );
}

export default OutfitCardPhoto;
