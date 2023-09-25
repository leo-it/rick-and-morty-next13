"use client";

import "./arrowScroll.css";

import React, { useEffect, useRef, useState } from "react";

import useStore from "../../store";

export const ArrowScroll = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { characterOne, characterTwo } = useStore();

  function handleScroll() {
    setIsClicked(true);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    setIsClicked(false);

    if (characterOne.name && characterTwo.name)
      window.scroll({
        top: document.body.offsetHeight,
        left: 0,
        behavior: "smooth",
      });
  }, [characterOne, characterTwo]);

  return (
    <>
      {!isClicked && characterOne.name && characterTwo.name ? (
        <>
          {" "}
          <button
            type="button"
            onClick={handleScroll}
            className="circle rotate-scale-up bg-purple-500 "
          >
            <div className="arrow "></div>{" "}
          </button>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
