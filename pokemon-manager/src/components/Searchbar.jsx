import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search for a Pokemon"
    />
  );
}

export default SearchBar;
