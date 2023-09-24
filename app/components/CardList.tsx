import React, { FC } from "react";

import Image from "next/image";

interface Character {
  name: string;
  image: string;
}

interface Props {
  character: Character;
  episodes: string[];
  title: string;
}
export const CardList: FC<Props> = ({ character, episodes, title }) => {
  const cargador = ({ src, width }: { src: any; width: any }) => {
    return `${src}?w=${width}`;
  };
  return (
    <div>
      <div className="rounded overflow-hidden max-h-[400px] min-w-[318px]  p-8">
        <Image
          loader={cargador}
          width={100}
          height={100}
          className="block justify-center mx-auto rounded-full  mb-4 sm:mb-0 "
          src={character.image}
          alt={character.name}
        />
        <div className="rounded-full  w-16 flex items-center justify-center bg-grey-light mx-auto mb-8"></div>
        <div className="font-bold text-xl mb-2 text-center">
          {character.name}
        </div>
        <p className="text-grey-darker text-base mb-4 text-center">{title}</p>
        <ul className="list-none max-h-[100px] overflow-y-auto   ">
          {episodes.map((ep) => {
            return (
              <li className="text-center" key={ep[-1]}>
                <span className="font-semibold">episode</span> -{" "}
                <span> {ep} </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
