import { useContext } from "react";
import { AppContext } from "../App";

import searchImage from "../assets/searchIcon.svg";

function SearchBar() {
  const {
    searchUser,
    searchInputHandler,
    handleKeyDown,
    searchUserHandler,
    noResult,
    themeLight,
  } = useContext(AppContext);

  return (
    <div className={!themeLight ? "search" : "searchLight search"}>
      <img src={searchImage} alt="Search Icon" />

      <form>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Search GitHub username…"
          value={searchUser}
          onChange={searchInputHandler}
          onKeyDown={handleKeyDown}
        />
        {noResult && <p className="error">No Results</p>}
      </form>

      <button type="button" onClick={searchUserHandler}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
