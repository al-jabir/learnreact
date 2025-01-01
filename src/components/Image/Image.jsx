import React from 'react';

const ImgUrl = {
  name: 'Hedy Lamarr',
  imageUrl:
    'https://images.pexels.com/photos/29904630/pexels-photo-29904630/free-photo-of-elegant-floral-arrangement-with-red-roses-and-pink-peonies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  imageSize: 90,
};

const Image = () => {
  return (
    <>
      <img
        className="avatar"
        src={ImgUrl.imageUrl}
        alt={'Photo of ' + ImgUrl.name}
        style={{
          width: ImgUrl.imageSize,
          height: ImgUrl.imageSize,
        }}
      />
    </>
  );
};

export default Image;
