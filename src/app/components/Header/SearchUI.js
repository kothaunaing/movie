import { XIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchUI = ({ setOpenSearch }) => {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [type, setType] = useState("Movies");

  const router = useRouter();

  useEffect(() => {
    const q = searchParams.get("query");
    if (q) setQuery(q);
  }, [searchParams.get("query")]);

  const handleForm = (e) => {
    e.preventDefault();

    if (query) {
      router.push(
        `/search/${type.toLocaleLowerCase()}?query=${encodeURIComponent(query)}`
      );
      setOpenSearch(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/50">
      <div className="p-4  w-[300px] bg-black/50 backdrop-blur-md rounded-md grid ">
        <div>
          <button onClick={() => setOpenSearch(false)}>
            <XIcon />
          </button>
        </div>

        <form onSubmit={handleForm} className="p-4 grid">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="text-black mb-2 p-2 rounded-lg"
          >
            <option>Movies</option>
            <option>People</option>
          </select>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-2 rounded-md text-black"
            placeholder="Search ZFlix..."
          />
          <button type="submit" className="bg-blue-700 mt-4 rounded-md p-2">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchUI;
