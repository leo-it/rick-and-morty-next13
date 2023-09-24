import { GridCharacters, ListEpisodes } from "./components";

import { ArrowScroll } from "./components/ArrowScroll";
import Link from "next/link";
import api from "./api";
import clsx from "clsx";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const responseCharacters = await api.fetch("character", page);
  const pageLength = responseCharacters.info.pages;
  const characters = responseCharacters.results;

  return (
    <div className="max-w-[1900px] mb-20 mx-auto">
      <ArrowScroll />
      <section className="grid md:grid-cols-2 grid-cols-1 w-full gap-4 mt-10 mb-4 ">
        <GridCharacters characters={characters} />
      </section>
      <div className="flex space-x-6 justify-center ">
        <Link
          href={{
            pathname: "/",
            query: {
              page: page > 1 ? page - 1 : 1,
            },
          }}
          className={clsx(
            "rounded-xl border bg-purple-500 px-3 py-1 text-sm text-gray-50",
            page <= 1 && "pointer-events-none opacity-50"
          )}
        >
          prev
        </Link>
        <p>
          {page}/{pageLength}
        </p>
        <Link
          href={{
            pathname: "/",
            query: {
              page: page + 1,
            },
          }}
          className={clsx(
            "rounded-xl border  bg-purple-500 px-3 py-1 text-sm text-gray-50",
            page >= pageLength && "pointer-events-none opacity-50"
          )}
        >
          next
        </Link>
      </div>  
      <div className="flex ">
      <ListEpisodes />

      </div>
    </div>
  );
}
