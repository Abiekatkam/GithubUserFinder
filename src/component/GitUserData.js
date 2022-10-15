import { useContext } from "react";
import { AppContext } from "../App";

function GitUserData() {
  const {
    userDetailData: { avatar, name, created, login, bio, url, isLight },
  } = useContext(AppContext);
  return (
    <div className="gituser">
      <img src={avatar} alt="user avatar" />

      <div className="gituserAll">
        <div className="gitusername">
          <h1>{name ? name : "No Name"}</h1>
          <p>Joined {created}</p>
        </div>

        <div>
          <a className="gituserTag" href={url}>
            @{login}
          </a>
        </div>

        <div className="gitbioMrg">
          <p
            className={bio ? (!isLight ? "gitbio" : "gitbioLight") : "gitnoBio"}
          >
            {bio ? bio : "This profile has no bio"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GitUserData;
