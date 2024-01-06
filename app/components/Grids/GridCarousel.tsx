"use client";

import { CardCarousel, Carousel } from "..";
import React, { FC, useEffect, useState } from "react";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  episode: string[];
}
interface Props {
  characters: Character[];
}
export const GridCarousel: FC<Props> = ({ characters }) => {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    window.screen.availWidth < 800 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return (
    <>
      <Carousel perView={isMobile ? 2 : characters.length < 6 ? 2 : 3.5}>
        {characters.map((result) => {
          return (
            <div key={result.id} className="keen-slider__slide ">
              <CardCarousel
                name={result.name}
                status={result.status}
                specie={result.species}
                image={result.image}
                id={result.id}
              />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};
