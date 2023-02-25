import React from "react";
import { Input } from "@chakra-ui/react";
const Search = ({ setSearch }) => {
  return (
    <Input
      input
      type="text"
      placeholder="Search"
      onChange={({ currentTarget: input }) => setSearch(input.value)}
    />
  );
};
export default Search;
