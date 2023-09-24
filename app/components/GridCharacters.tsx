"use client";

import React, { FC, useEffect, useState } from "react";

import { Card } from "./Card";
import useStore from "../store";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: string[];
  url: string;
}
interface Props {
  characters: Character[];
}
export const GridCharacters: FC<Props> = ({ characters }) => {
  const [isSelectedCharacterOne, setIsSelectedCharacterOne] = useState(0);
  const [isSelectedCharacterTwo, setIsSelectedCharacterTwo] = useState(0);
  const { setCharacterOneEpisodes, setCharacterTwoEpisodes } = useStore();

  const charactersPerPage = 6;
  const charactersOne = characters.slice(0, charactersPerPage);
  const charactersTwo = characters.slice(
    charactersPerPage,
    charactersPerPage + 6
  );
  useEffect(() => {
    // console.log("isSelectedCharacterOne,",isSelectedCharacterOne);

    // Filtra el array de personajes por el ID seleccionado
    const selectedCharacterOne = characters.find(
      (character) => character.id === isSelectedCharacterOne
    );
    if (selectedCharacterOne) setCharacterOneEpisodes(selectedCharacterOne.episode);
  }, [isSelectedCharacterOne, characters, setCharacterOneEpisodes]);

  useEffect(() => {
    // console.log("isSelectedCharacterTwo,",isSelectedCharacterTwo);

    // Filtra el array de personajes por el ID seleccionado
    // console.log(isSelectedCharacterTwo);

    const selectedCharacterTwo = characters.find(
      (character) => character.id === isSelectedCharacterTwo
    );
    if (selectedCharacterTwo) setCharacterTwoEpisodes(selectedCharacterTwo.episode);
  }, [isSelectedCharacterTwo, characters, setCharacterTwoEpisodes]);

  return (
    <>
      <article className="p-4  w-full border-r   border-gray-400">
        <h3 className="my-5 font-bold text-2xl">Character #1</h3>
        <div className="grid grid-cols-2 gap-2 ">
          {charactersOne.map((result) => {
            return (
              <div key={result.id}>
                <Card
                  isSelected={isSelectedCharacterOne}
                  setIsSelected={setIsSelectedCharacterOne}
                  name={result.name}
                  status={result.status}
                  specie={result.species}
                  image={result.image}
                  id={result.id}
                />
              </div>
            );
          })}
        </div>{" "}
      </article>
      <article className="p-4  w-full border-gray-400">
        <h3 className="my-5 font-bold text-2xl">Character #2</h3>
        <div className="grid grid-cols-2 gap-2 ">
          {charactersTwo.map((result) => {
            return (
              <div key={result.id}>
                <Card
                  isSelected={isSelectedCharacterTwo}
                  setIsSelected={setIsSelectedCharacterTwo}
                  name={result.name}
                  status={result.status}
                  specie={result.species}
                  image={result.image}
                  id={result.id}
                />
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};
