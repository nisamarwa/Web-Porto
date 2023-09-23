import React from 'react';
import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';

function MiniCarousel({ videoData }) {

  return (
    <Carousel
      withIndicators
      slideGap={rem(10)}
      loop
    >
      {videoData.map((video, index) => (
        <Carousel.Slide key={index} style={{ borderRadius: '10px' }}>
          <video 
          src={video.src} 
          autoPlay
          controls 
          muted 
          loop
          width='100%'
          height= '100%'
          style={{
            objectFit: 'cover',
            borderRadius:'10px'
          }}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default MiniCarousel;
