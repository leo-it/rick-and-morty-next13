import * as img from "./../../public/img/Rick_and_Morty.svg.png";

import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <div className="h-[150px] bg-gray-300 text-center flex flex-col justify-center ">
      <div className="mx-auto">
        <Image src={img} width={150} height={150} alt="rick-and-morty" />
      </div>
      <div className="py-2">
        <p className="">Leonardo Sainz</p>
      </div>
    </div>
  );
};
