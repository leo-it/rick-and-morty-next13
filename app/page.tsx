import { GridCharacters } from "./components";
import Link from "next/link";
import api from "./api";
import clsx from 'clsx'

export default async function Home({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  const page =
  typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
const limit =
  typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 10

const search =
  typeof searchParams.search === 'string' ? searchParams.search : undefined

// const promise = getMovies({ page, limit, query: search })
const response = await api.item.fetch("character", page)

console.log(search);

  // const response = await api.item.fetch("character", 4);
  const characters = response.results;

  return (
    <div className="max-w-[1900px]  mx-auto">
        <div className='flex space-x-6'>
            <Link
              href={{
                pathname: '/',
                query: {
                  ...(search ? { search } : {}),
                  page: page > 1 ? page - 1 : 1
                }
              }}
              className={clsx(
                'rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800',
                page <= 1 && 'pointer-events-none opacity-50'
              )}
            >
              -
            </Link>
            <Link
              href={{
                pathname: '/',
                query: {
                  ...(search ? { search } : {}),
                  page: page + 1
                }
              }}
              className={clsx(
                'rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800',
                page >= 41 && 'pointer-events-none opacity-50'
              )}
            >
              +
            </Link>
          </div>
      <section className="grid md:grid-cols-2 grid-cols-1 w-full ">
        <GridCharacters characters={characters} />
      </section>
      <article className="grid md:grid-cols-3 grid-cols-1 mt-6 px-4 ">
        <section className="border-r  border-gray-400">
          {/* esto se podria componentizar */}
          <h3 className="font-bold text-2xl">Character #1 - Only Episodes</h3>
          <ul className="list-none">
            <li className="text-lg">
              <span className="font-semibold">episode</span> -{" "}
              <span> Now this is a story all about how, </span>
            </li>
          </ul>
        </section>
        <section className="border-r  border-gray-400">
          <h3 className="font-bold text-2xl">
            Character #1 & #2 -Shared Episodes
          </h3>
        </section>
        <section className="border-r  border-gray-400">
          <h3 className="font-bold text-2xl">Character #2 - Only Episodes</h3>
        </section>
      </article>
    </div>
  );
}
