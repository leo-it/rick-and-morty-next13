import { GridCharacters, ListEpisodes } from "./components";

import { ArrowScroll } from "./components/Buttons/ArrowScroll";
import GridFetchCharacters from "./components/Grids/GridFetchCharacters";
import GridSkeleton from "./components/Skeletons/GridSkeleton";
import Search from "./components/Searchbox/Search";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  return (
    <div className="max-w-[1500px] min-h-[80vh] mb-20 mx-auto">
      <ArrowScroll />
      <div className="mt-10 w-[300px] mx-auto">
        <Search search={search} />
      </div>
      <Suspense key={page} fallback={<GridSkeleton />}>
        <GridFetchCharacters page={page} />
      </Suspense>

      <div className="flex ">
        <ListEpisodes />
      </div>
    </div>
  );
}
