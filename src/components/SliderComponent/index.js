import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function SliderComponent() {
  const settingsForSlider = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    arrows: false,
    slickPrev: false,
  };

  return (
    <Slider {...settingsForSlider}>
      <img className='w-full' src='https://picsum.photos/920/250' />

      <img className='w-full' src='https://picsum.photos/920/250' />

      <img className='w-full' src='https://picsum.photos/920/250' />

      <img className='w-full' src='https://picsum.photos/920/250' />
    </Slider>
  );
}
