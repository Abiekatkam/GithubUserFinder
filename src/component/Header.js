import { useContext } from "react";

import sunImage from "../assets/sunIcon.svg";
import moonImage from "../assets/moonIcon.svg";

import { AppContext } from "../App";

function Header() {
  const { setContentLight, setThemeLight, themeLight, contentLight } =
    useContext(AppContext);

  const themeChangeHandler = () => {
    setThemeLight((prevState) => !prevState);
    setContentLight((prevState) => !prevState);
  };

  if (contentLight === true) {
    document.body.style.backgroundColor = "#F6F8FF";
  } else {
    document.body.style.backgroundColor = "#141d2f";
  }

  return (
    <div className={!themeLight ? "navbar" : "navbar navbarLight"}>
      <span>github user finder</span>

      <div className="mode" onClick={themeChangeHandler}>
        <p>{!themeLight ? "Light" : "Dark"}</p>

        {!themeLight && <img src={sunImage} alt="Light/Dark mode" />}

        {themeLight && <img src={moonImage} alt="Light/Dark mode" />}
      </div>
    </div>
  );
}

export default Header;
