"use client";

import React from "react";
import useStore from "../store";

export const ListEpisodes = () => {
  const { characterOneEpisodes, characterTwoEpisodes } = useStore();

  function obtenerNumero(url) {
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
  const urlsCoincidentes = characterOneEpisodes.filter((url) =>
    numerosCoincidentes.includes(obtenerNumero(url))
  );

  console.log(urlsCoincidentes);
  //   console.log(characterOneEpisodes);

  return (
    <>
      {characterOneEpisodes.length > 0 && characterTwoEpisodes.length > 0 ? (
        <article className="grid md:grid-cols-3 grid-cols-1 mt-6 px-4 ">
          <section className="border-r  border-gray-400">
            <h3 className="font-bold text-2xl">Character #1 - Only Episodes</h3>
            <ul className="list-none">
              {characterOneEpisodes.map((ep) => {
                return (
                  <li key={ep[-1]}>
                    <span className="font-semibold">episode</span> -{" "}
                    <span> {ep} </span>
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="border-r  border-gray-400">
            <h3 className="font-bold text-2xl">
              Character #1 & #2 -Shared Episodes
            </h3>
            <ul className="list-none">
              {urlsCoincidentes ? (
                urlsCoincidentes.map((ep) => {
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
          <section className="border-r  border-gray-400">
            <h3 className="font-bold text-2xl">Character #2 - Only Episodes</h3>
            <ul className="list-none">
              {characterTwoEpisodes.map((ep) => {
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
