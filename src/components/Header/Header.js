import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          className="header__icon"
          alt=""
        />
      </Link>
      <div className="header__center">
        <input type="text" onChange={handleSearch} value={search} />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
