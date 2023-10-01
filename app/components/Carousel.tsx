import "keen-slider/keen-slider.min.css";

import React, { FC, ReactNode } from "react";

import { useKeenSlider } from "keen-slider/react";

interface Props {
  children: ReactNode;
  perView: number;
}
export const Carousel: FC<Props> = ({ children, perView }) => {
  console.log("children", children);
  console.log("perView", perView);

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
