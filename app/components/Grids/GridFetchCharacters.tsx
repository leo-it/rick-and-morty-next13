import { GridCharacters } from "..";
import Link from "next/link";
import React from "react";
import api from "@/app/api";
import clsx from "clsx";

const GridFetchCharacters = async ({ page }) => {
  const responseCharacters = await api.fetch("character", page);
  const pageLength = responseCharacters.info.pages;
  const characters = responseCharacters.results;
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-4 mt-10 mb-4 ">
        <GridCharacters characters={characters} />
      </div>

      <div className="flex space-x-6 justify-center ">
        <Link
          prefetch={false}
          href={{
            pathname: "/",
            query: {
              page: page > 1 ? page - 1 : 1,
            },
          }}
          className={clsx(
            "font-rick rounded-xl border bg-purple-500  hover:bg-purple-600 px-3 py-1 text-sm text-gray-50",
            page <= 1 && "pointer-events-none opacity-50 "
          )}
        >
          prev
        </Link>
        <p className="font-rick">
          {page}/{pageLength}
        </p>
        <Link
          prefetch={true}
          href={{
            pathname: "/",
            query: {
              page: page + 1,
            },
          }}
          className={clsx(
            "rounded-xl border font-rick  bg-purple-500 hover:bg-purple-600 px-3 py-1 text-sm text-gray-50",
            page >= pageLength && "pointer-events-none opacity-50 "
          )}
        >
          next
        </Link>
      </div>
    </>
  );
};

export default GridFetchCharacters;
