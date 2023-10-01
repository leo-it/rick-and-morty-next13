"use client";

import React, { FC } from "react";

import Image from "next/image";

interface Props {
  name: string;
  status: string;
  specie: string;
  id: number;
  image: string;
}
export const CardCarousel: FC<Props> = ({
  name,
  id,
  image,status,specie
}) => {
  const cargador = ({ src, width }: { src: any; width: any }) => {
    return `${src}?w=${width}`;
  };
  return (
    <div
      key={id}
      // ref={cardRef}
      className={
        "rotate--box bg-white mx-auto w-[320px] shadow-lg hover:border  rounded-lg overflow-hidden scale-up-hor-center"
      }
    >
      <div className="sm:flex sm:items-center px-6 py-4">
        <Image
          loader={cargador}
          width={100}
          height={100}
          className="block rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
          src={image}
          alt={name}
        />
         <div className="text-center sm:text-left sm:flex-grow">
          <div className="mb-4 ">
            <p className="text-xl leading-tight truncate w-full text-gray-600 font-rick">
              {name}
            </p>
            <p className="text-sm leading-tight text-gray-500 font-rick">
              {status}
            </p>
            <p className="text-sm leading-tight text-gray-500 font-rick">
              {specie}
            </p>
          </div>
          <div>
           
          </div>
        </div>
      </div>
    </div>
  );
};
