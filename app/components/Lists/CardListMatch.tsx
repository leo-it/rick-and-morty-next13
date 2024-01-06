import React, { FC } from "react";

import Image from "next/image";

interface Character {
  name: string;
  image: string;
}

interface Props {
  characterOne: Character;
  characterTwo: Character;
  episodes: string[];
  title: string;
}
export const CardListMatch: FC<Props> = ({
  characterOne,
  characterTwo,
  episodes,
  title,
}) => {
  const cargador = ({ src, width }: { src: any; width: any }) => {
    return `${src}?w=${width}`;
  };
  return (
    <div>
      <div className="rounded overflow-hidden max-h-[400px] min-w-[318px] p-8">
        <div className="flex">
          <Image
            loader={cargador}
            width={100}
            height={100}
            className="block justify-center mx-auto rounded-full  mb-4 sm:mb-0 "
            src={characterOne.image}
            alt={characterOne.name}
          />
          <Image
            loader={cargador}
            width={100}
            height={100}
            className="block justify-center mx-auto rounded-full  mb-4 sm:mb-0 "
            src={characterTwo.image}
            alt={characterTwo.name}
          />
        </div>

        <div className="rounded-full  w-16 flex items-center justify-center bg-grey-light mx-auto mb-8"></div>
        <div className="font-bold text-xl mb-2 text-center font-rick">
          {characterOne.name} - {characterTwo.name}
        </div>
        <p className="text-grey-darker text-base mb-4 text-center font-rick">{title}</p>
        <ul className="list-none max-h-[100px] overflow-y-auto   ">
          {episodes.map((ep) => {
            return (
              <li className="text-center font-rick" key={ep[-1]}>
                <span className="font-semibold font-rick">episode</span> -{" "}
                <span> {ep} </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
