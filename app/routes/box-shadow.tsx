import React from "react";
import { LinksFunction } from "@remix-run/node";
import MainBox, { links as boxShadow } from "~/components/Boxshadow/MainBox";

const Boxshadow = () => {
  return (
    <div>
      <MainBox />
    </div>
  );
};

export default Boxshadow;
export const links: LinksFunction = () => {
  return [...boxShadow()];
};
