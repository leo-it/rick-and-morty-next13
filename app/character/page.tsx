import { GridCarousel } from "../components/GridCarousel";
import Search from "../components/Search";
import api from "../api";

export default async function Character({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const { results } = await api.search(searchParams.search);
  const charactersOne = results ? results.slice(0, results.length / 2) : [];
  const charactersTwo = results
    ? results.slice(results.length / 2, results.length)
    : [];
  return (
    <div className="max-w-[1200px] h-screen mt-10 mx-auto  ">
      <div className=" w-[300px] mx-auto mb-10">
        <Search search={search} />
      </div>
      {charactersOne.length < 1 ? (
        <h2 className="my-5 font-bold text-2xl text-center font-rick">
          The character was not found...{" "}
        </h2>
      ) : (
        <>
          <h2 className=" mb-7 font-bold text-2xl text-center font-rick">
            The character was found{" "}
          </h2>

          <div className="mx-auto mb-4 ">
            <GridCarousel characters={charactersOne} />
          </div>
          <div>
            <GridCarousel characters={charactersTwo} />
          </div>
        </>
      )}
    </div>
  );
}
