"use client";

import "./arrowScroll.css";

import React, { useEffect, useRef, useState } from "react";

import useStore from "../store";

export const ArrowScroll = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { characterOne, characterTwo } = useStore();

  function handleScroll() {
    setIsClicked(true);
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    setIsClicked(false);
  }, [characterOne, characterTwo]);

  return (
    <>
      {!isClicked &&
      characterOne &&
      characterOne.name &&
      characterTwo &&
      characterTwo.name ? (
        <>
          {" "}
          <div
            className="circle  
      bg-purple-500
      "
          >
            <button
              className="arrow "
              onClick={handleScroll}
              type="button"
            ></button>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
