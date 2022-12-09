import SearchControl from "./search-control";
import SearchResults from "./search-results";
import {Route, Routes} from "react-router-dom";

const SearchComponent = () => {
  return (
      <div>
        <SearchControl/>

        {/*<SearchResults/>*/}
        <Routes>
          <Route path="/search" element={<SearchResults/>}/>
        </Routes>

      </div>
  );
}

export default SearchComponent;