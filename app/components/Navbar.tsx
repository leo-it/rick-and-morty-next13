import * as img from "./../../public/img/Rick_and_Morty.svg.png";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="h-[80px] bg-gray-300 text-center flex flex-col justify-center ">
      <div className="md:ml-20 ml-4">
        <Link href="/">
          <Image src={img} width={120} height={120} alt="rick-and-morty" />
        </Link>
      </div>
    </div>
  );
};
