import "keen-slider/keen-slider.min.css";

import React from "react";
import { useKeenSlider } from "keen-slider/react";

export const Carousel = ({ children, perView }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: perView,
      spacing: 15,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {children}
    </div>
  );
};
