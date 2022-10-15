import { useContext } from "react";
import { AppContext } from "../App";
import GitUserData from "./GitUserData";
import GitUserLinks from "./GitUserLinks";

function GitDetailData() {
  const {
    userDetailData: { isLight },
    noResult,
  } = useContext(AppContext);

  return (
    <div>
      {!noResult && (
        <div
          className={
            !isLight ? "userInfosCard" : "userInfosCard userInfosCardLight"
          }
        >
          <GitUserData />
          <GitUserLinks />
        </div>
      )}
      {noResult && <div className="errorMessage">Search relevant username</div>}
    </div>
  );
}

export default GitDetailData;
