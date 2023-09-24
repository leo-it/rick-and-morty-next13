import { GridCharacters, ListEpisodes } from "./components";

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

  const responseCharacters = await api.item.fetch("character", page);
const pageLength=responseCharacters.info.pages
  const characters = responseCharacters.results;

  return (
    <div className="max-w-[1900px] mb-20 mx-auto">
      <div className="flex space-x-6 justify-center">
        <Link
          href={{
            pathname: "/",
            query: {
              page: page > 1 ? page - 1 : 1,
            },
          }}
          className={clsx(
            "rounded border bg-purple-500 px-3 py-1 text-sm text-gray-50",
            page <= 1 && "pointer-events-none opacity-50"
          )}
        >
          -
        </Link>
        <Link 
          href={{
            pathname: "/",
            query: {
              page: page + 1,
            },
          }}
          className={clsx(
            "rounded border  bg-purple-500 px-3 py-1 text-sm text-gray-50",
            page >= pageLength && "pointer-events-none opacity-50"
          )}
        >
          +
        </Link>
      </div>
      <section className="grid md:grid-cols-2 grid-cols-1 w-full ">
        <GridCharacters characters={characters} />
      </section>
      <ListEpisodes /> 
    </div>
  );
}
