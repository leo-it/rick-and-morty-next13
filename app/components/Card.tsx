"use client";

import React, { FC, useEffect, useRef } from "react";

import Image from "next/image";
import clsx from "clsx";

interface Props {
  name: string;
  status: string;
  specie: string;
  id: number;
  image: string;
  setIsSelected: any;
  isSelected: number;
}
export const Card: FC<Props> = ({
  name,
  status,
  specie,
  id,
  image,
  setIsSelected,
  isSelected,
}) => {
  useEffect(() => {
    if (id === isSelected) {
    }
  }, [id, isSelected]);

  const handleSelect = () => {
    setIsSelected(id);
   
  };
  const cargador = ({ src, width }: { src: any; width: any }) => {
    return `${src}?w=${width}`;
  };
  return (
    <div
      key={id}
      // ref={cardRef}
      className={clsx(
        "bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden",
        isSelected === id && "bg-zinc-200"
      )}
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
            <p className="text-xl leading-tight truncate w-44">{name}</p>
            <p className="text-sm leading-tight text-gray-400">{status}</p>
            <p className="text-sm leading-tight text-gray-400">{specie}</p>
          </div>
          <div>
            <button
              onClick={() => handleSelect()}
              className="text-xs font-semibold rounded-full px-4 py-1 leading-normal border-2 border-purple-400 text-purple hover:bg-purple-400 hover:text-white"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
