import React from "react";
import { FiSearch } from "react-icons/fi";
import { SearchContainer, SearchInput, SearchIcon } from "./styles";

const SearchBar = ({ placeholder }) => {
  return (
    <SearchContainer>
      <SearchIcon>
        <FiSearch size={20} color="#666" />
      </SearchIcon>
      <SearchInput type="text" placeholder={placeholder} />
    </SearchContainer>
  );
};

export default SearchBar;
