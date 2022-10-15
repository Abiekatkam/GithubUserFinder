import { createContext, useEffect, useState } from "react";

import "./index.css";
import Card from "./component/Card";
import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import GitDetailData from "./component/GitDetailData";

export const AppContext = createContext();

function App() {
  // usestates
  const [themeLight, setThemeLight] = useState(false);
  const [contentLight, setContentLight] = useState(false);
  const [user, setUser] = useState({});
  const [searchUser, setSearchUser] = useState("");
  const [noResult, setNoResult] = useState(false);

  // fetching data
  const gitUsersData = async (user) => {
    const response = await fetch(`https://api.github.com/users/${user}`);

    if (!response.ok) {
      setNoResult(true);
    }

    const data = await response.json();

    let date = new Date(data.created_at);
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let finalDate =
      date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();

    data.created_at = finalDate;
    setUser(data);
  };

  useEffect(() => {
    gitUsersData("Abiekatkam");
  }, []);

  //
  const searchInputHandler = (e) => {
    setSearchUser(e.target.value);
  };
  // When user press Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchUserHandler();
    }
  };

  //
  const searchUserHandler = () => {
    gitUsersData(searchUser);
    setNoResult(false);
  };

  const userDetailData = {
    avatar: user.avatar_url,
    login: user.login,
    name: user.name,
    created: user.created_at,
    bio: user.bio,
    repos: user.public_repos,
    followers: user.followers,
    following: user.following,
    location: user.location,
    website: user.blog,
    twitter: user.twitter_username,
    company: user.company,
    url: user.html_url,
    isLight: themeLight,
  };

  const appContent = {
    searchUser,
    themeLight,
    setThemeLight,
    contentLight,
    setContentLight,
    user,
    noResult,
    userDetailData,
    searchInputHandler,
    handleKeyDown,
    searchUserHandler,
  };

  return (
    <Card>
      <AppContext.Provider value={appContent}>
        <Header />
        <SearchBar />
        <GitDetailData />
      </AppContext.Provider>
    </Card>
  );
}

export default App;
