import React from 'react';

export default function ImageGalleryItem({ image, modalImg }) {


  return (
    <li onClick={() => modalImg(image.largeImageURL)} className="ImageGalleryItem">
      <img src={image.webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
}