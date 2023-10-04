"use client";

import React, { useEffect, useState } from "react";

import { CardList } from "./CardList";
import { CardListMatch } from "./CardListMatch";
import Swal from "sweetalert2";
import useStore from "../store";

export const ListEpisodes = () => {
  const { characterOne, characterTwo } = useStore();
  const [characterOneEpisodes, setCharacterOneEpisodes] = useState(
    characterOne.episode
  );
  const [characterTwoEpisodes, setCharacterTwoEpisodes] = useState(
    characterTwo.episode
  );

  function obtenerNumero(url: string) {
    const partes = url.split("/");
    return partes[partes.length - 1];
  }

  // Obtener los números de ambos arrays
  const episodesOne = characterOneEpisodes.map(obtenerNumero);
  const episodesTwo = characterTwoEpisodes.map(obtenerNumero);

  // Encontrar números coincidentes
  const episodesMatch = episodesOne.filter((numero) =>
    episodesTwo.includes(numero)
  );
  const cargador = ({ src, width }: { src: any; width: any }) => {
    return `${src}?w=${width}`;
  };
  useEffect(() => {
    setCharacterOneEpisodes(characterOne.episode);
    setCharacterTwoEpisodes(characterTwo.episode);

    if (characterTwo === characterOne) {
      Swal.fire("Repeated character, choose a different one please");
      setCharacterOneEpisodes([]);
      setCharacterTwoEpisodes([]);
    }
  }, [characterTwo, characterOne]);
  return (
    <>
      {characterOneEpisodes.length > 0 && characterTwoEpisodes.length > 0 ? (
        <article className="grid max-w-[1300px] gap-8 mx-auto md:grid-cols-3 grid-cols-1 mt-16 px-4 scale-up-hor-center ">
          <section className="border rounded-lg max-w-[350px] min-w-[320px]  border-gray-400 ">
            <CardList
              character={characterOne}
              episodes={episodesOne}
              title={"Episodes Character #1"}
            />
          </section>
          <section className="border rounded-lg max-w-[350px] min-w-[320px]  border-gray-400 ">
            <CardListMatch
              characterOne={characterOne}
              characterTwo={characterTwo}
              episodes={episodesMatch}
              title={"Episodes Characters #1 & #2"}
            />
          </section>
          <section className="border rounded-lg max-w-[350px] min-w-[320px]  border-gray-400 ">
            <CardList
              character={characterTwo}
              episodes={episodesTwo}
              title={"Episodes Character #2"}
            />
          </section>
        </article>
      ) : (
        <></>
      )}
    </>
  );
};
