"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = (props: { query: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="relative -mt-8 flex flex-1 flex-shrink-0 p-4 text-black">
      <form
        action=""
        className="m-4 mt-8 w-64 rounded-lg border-2 md:w-[400px]"
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-full rounded-md p-4 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 focus:ring-white"
          placeholder="Search for a movie"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          autoFocus={true}
          defaultValue={props.query}
        />
        <MagnifyingGlassIcon className="absolute left-8 top-1/2 ml-4 mt-2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </form>
    </div>
  );
};

export default Search;
