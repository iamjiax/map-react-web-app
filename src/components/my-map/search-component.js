import SearchControl from "./search-control";
import SearchResults from "./search-results";
import {Route, Routes} from "react-router-dom";
import MyMap from "./index";

const SearchComponent = () => {
  return (
      <div>
        <SearchControl/>
        <SearchResults/>
      </div>
  );
}

export default SearchComponent;