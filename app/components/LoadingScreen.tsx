"use client";

import "./loadingScreen.css";

import React from "react";

export const LoadingScreen = () => {
  return (
    <>
      <div className="w-full h-[100vh] bg-loading">
        <div className="fixed top-[-60px] left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden flex flex-col items-center justify-center ">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        </div>
      </div>
    </>
  );
};
