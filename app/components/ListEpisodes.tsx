"use client";

import React from "react";
import useStore from "../store";

export const ListEpisodes = () => {
  const { characterOne, characterTwo } = useStore();

  const characterOneEpisodes = characterOne.episode;
  const characterTwoEpisodes = characterTwo.episode;
  function obtenerNumero(url: string) {
    const partes = url.split("/");
    return partes[partes.length - 1];
  }

  // Obtener los números de ambos arrays
  const numerosOne = characterOneEpisodes.map(obtenerNumero);
  const numerosTwo = characterTwoEpisodes.map(obtenerNumero);

  // Encontrar números coincidentes
  const numerosCoincidentes = numerosOne.filter((numero) =>
    numerosTwo.includes(numero)
  );

  // Obtener las URL completas correspondientes a los números coincidentes
  /*  const urlsCoincidentes = characterOneEpisodes.filter((url) =>
    numerosCoincidentes.includes(obtenerNumero(url))
  ); */
  console.log(numerosCoincidentes, "numerosCoincidentes");

  return (
    <>
      {characterOneEpisodes.length > 0 && characterTwoEpisodes.length > 0 ? (
        <article className="grid md:grid-cols-3 grid-cols-1 mt-16 px-4 ">
          <section className="border-r  border-gray-400 mx-6">
            <h3 className="font-bold text-2xl mb-4 h-20">
              Character {characterOne.name} - Only Episodes
            </h3>
            <ul className="list-none max-h-[50vh] overflow-y-auto   ">
              {numerosOne.map((ep) => {
                return (
                  <li key={ep[-1]}>
                    <span className="font-semibold">episode</span> -{" "}
                    <span> {ep} </span>
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="border-r  border-gray-400 mx-3">
            <h3 className="font-bold text-2xl mb-4 h-20">
              Character {characterOne.name} & {characterTwo.name} -Shared
              Episodes
            </h3>
            <ul className="list-none max-h-[50vh] overflow-y-auto  ">
              {numerosCoincidentes.length > 0 ? (
                numerosCoincidentes.map((ep) => {
                  return (
                    <li key={ep[-1]}>
                      <span className="font-semibold">episode</span> -{" "}
                      <span> {ep} </span>
                    </li>
                  );
                })
              ) : (
                <p>there are no matches</p>
              )}
            </ul>
          </section>
          <section className="border-r  border-gray-400 mx-6">
            <h3 className="font-bold text-2xl mb-4 h-20">
              Character {characterTwo.name} - Only Episodes
            </h3>
            <ul className="list-none max-h-[50vh] overflow-y-auto  ">
              {numerosTwo.map((ep) => {
                return (
                  <li key={ep[-1]}>
                    <span className="font-semibold">episode</span> -{" "}
                    <span> {ep} </span>
                  </li>
                );
              })}
            </ul>
          </section>
        </article>
      ) : (
        <></>
      )}
    </>
  );
};
