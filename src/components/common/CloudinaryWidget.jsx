import React from 'react';
import Thumbnails from './Thumbnails.jsx';

const { useState, memo } = React;

const CloudinaryWidget = memo(({ setImageUrls }) => {
  const [thumbnailUrls, setThumbnailUrls] = useState([]);
  let urlList = [];
  let thumbnailList = [];
  const updateImageUrls = () => {
    setImageUrls(urlList);
    setThumbnailUrls(thumbnailList);
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
      urlList.push(result.info.url);
      thumbnailList = [...thumbnailList, result.info.thumbnail_url];
      console.log(result.info);
      updateImageUrls();
    }
  });

  const handleClick = (e) => {
    e.preventDefault();
    urlList = [];
    thumbnailList = [];
    myWidget.open();
  };

  return (
    <div>
      {/* <div className="reviews-uploaded-thumbnails">
        {thumbnailUrls.map((url, index) => {
          const alt = `uploaded image ${index + 1}`;
          return (
            <span key={url}>
              <img src={url} alt={alt} />
              {' '}
            </span>
          );
        })}
      </div> */}
      <Thumbnails thumbnailUrls={thumbnailUrls} />
      <button className="review-upload-button" type="button" onClick={handleClick}>Upload Images</button>
    </div>
  );
});

export default CloudinaryWidget;
