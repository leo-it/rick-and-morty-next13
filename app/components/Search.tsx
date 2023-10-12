"use client";

import { useEffect, useState } from "react";

import { useDebounce } from "use-debounce";
import { useRouter } from "next/navigation";

const Search = ({ search }: { search?: string }) => {
  const router = useRouter();

  const [text, setText] = useState(search);
  const [query] = useDebounce(text, 750);

  useEffect(() => {
    if (!query) {
      router.push(`/`);
    } else {
      router.push(`/character?search=${query}`);
    }
  }, [query]);

  return (
    <div className="relative rounded-md shadow-sm">
      <input
        value={text}
        placeholder="Search characters..."
        onChange={(e) => setText(e.target.value)}
        className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
};

export default Search;
