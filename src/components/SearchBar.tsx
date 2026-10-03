import React, { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface SearchBarProps {
  setSearch: Dispatch<SetStateAction<string>>;
}

export const Search = ({ setSearch }: SearchBarProps) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = () => {
    setSearch(searchInput);
  };
  return (
    <div className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search recipes..."
          className="w-full flex-1 rounded-lg border border-border bg-surface px-4 py-3 text-text-primary outline-none placeholder:text-text-muted focus:border-primary"
        />

        <button
          type="button"
          onClick={handleSearch}
          className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-background hover:bg-primary-hover sm:w-auto"
        >
          Search
        </button>
      </div>
    </div>
  );
};
