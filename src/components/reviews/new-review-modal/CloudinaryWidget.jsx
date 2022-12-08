import React from 'react';

export default function CloudinaryWidget({ setImageUrls }) {
  const urlList = [];
  const updateImageUrls = () => {
    setImageUrls(urlList);
  };

  const myWidget = cloudinary.createUploadWidget({
    cloudName: 'dqaynsuqp',
    uploadPreset: 'fvabmmxg',
    sources: [
      'local',
    ],
    showAdvancedOptions: false,
    cropping: false,
    multiple: true,
    defaultSource: 'local',
    styles: {
      palette: {
        window: '#ffffff',
        sourceBg: '#f4f4f5',
        windowBorder: '#90a0b3',
        tabIcon: '#000000',
        inactiveTabIcon: '#555a5f',
        menuIcons: '#555a5f',
        link: '#0433ff',
        action: '#339933',
        inProgress: '#0433ff',
        complete: '#339933',
        error: '#cc0000',
        textDark: '#000000',
        textLight: '#fcfffd',
      },
      fonts: {
        default: null,
        'sans-serif': {
          url: null,
          active: true,
        },
      },
      maxFiles: 5,
      resourceType: 'image',
    },
  }, (error, result) => {
    if (!error && result && result.event === 'success') {
      console.log('Done! Here is the image info: ', result.info.url);
      urlList.push(result.info.url);
      updateImageUrls();
    }
  });

  const handleClick = (e) => {
    e.preventDefault();
    myWidget.open();
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>Upload Images</button>
    </div>
  );
}
