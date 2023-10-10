import React from "react";
import { Link } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import header from "./header.css";

const Header = () => {
  return (
    <div className="header">
      <header className="header_container">
        <Link to={"/box-shadow"}>Box shadow</Link>
        <Link to={"/text-shadow"}>Text shadow</Link>
        <Link to={"/box-shadow"}>Border</Link>
        <Link to={"/box-shadow"}>Transform</Link>
        <Link to={"/box-shadow"}>Gradient</Link>
      </header>
    </div>
  );
};

export default Header;
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: header }];
};
