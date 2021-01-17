import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

export default function ImageGallery( {images, modalImg} ) {
  return (
    <ul className="ImageGallery">
      {images.map(image => <ImageGalleryItem modalImg={modalImg} key={image.id} image={image} />)}
    </ul>
  );
}