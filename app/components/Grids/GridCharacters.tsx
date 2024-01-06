"use client";

import React, { FC, useEffect, useState } from "react";

import { Card } from "../Cards/CardCharacter";
import useStore from "../../store";

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
export const GridCharacters: FC<Props> = ({ characters }) => {
  const [isSelectedCharacterOne, setIsSelectedCharacterOne] = useState(0);
  const [isSelectedCharacterTwo, setIsSelectedCharacterTwo] = useState(0);
  const { setCharacterOne, setCharacterTwo, characterOne, characterTwo } =
    useStore();

  useEffect(() => {
    const selectedCharacterOne = characters.find(
      (character) => character.id === isSelectedCharacterOne
    );
    if (selectedCharacterOne) setCharacterOne(selectedCharacterOne);
  }, [isSelectedCharacterOne, characters, setCharacterOne]);

  useEffect(() => {
    const selectedCharacterTwo = characters.find(
      (character) => character.id === isSelectedCharacterTwo
    );
    if (selectedCharacterTwo) setCharacterTwo(selectedCharacterTwo);
  }, [isSelectedCharacterTwo, characters, setCharacterTwo]);


  return (
    <>
      
      {characters.length > 0 ? (
        <>
          <article className="p-4  w-full  border rounded-lg border-gray-400">
            <h3 className="my-5 font-bold text-2xl font-rick">
              Character #1{" "}
              {characterOne && characterOne.name ? (
                <span> {characterOne.name}</span>
              ) : (
                <></>
              )}
            </h3>
            <div className="grid grid-cols-2 gap-2 max-h-[55vh] overflow-y-auto">
              {characters.map((result) => {
                return (
                  <div className="pr-1" key={result.id}>
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
          <article className="p-4  w-full border rounded-lg border-gray-400 ">
            <h3 className="my-5 font-bold text-2xl font-rick">
              Character #2{" "}
              {characterTwo && characterTwo.name ? (
                <span> {characterTwo.name} </span>
              ) : (
                <></>
              )}
            </h3>
            <div className="grid grid-cols-2 gap-2 max-h-[55vh] overflow-y-auto  ">
              {characters.map((result) => {
                return (
                  <div className="pr-1" key={result.id}>
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
      ) : (
        <p className="font-rick"> Characters dont found</p>
      )}
    </>
  );
};
