import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export function DemoCarousel() {
  return (
    <Carousel>
      <div>
          <img src="1.jpeg" />
          <p className="legend">Japn</p>
      </div>
      <div>
          <img src="2.jpeg" />
          <p className="legend">Macos</p>
      </div>
      <div>
          <img src="3.jpg" />
          <p className="legend">Hong Kong</p>
      </div>
      <div>
          <img src="4.jpeg" />
          <p className="legend">Las Vagas</p>
      </div>
    </Carousel>
  )
}
