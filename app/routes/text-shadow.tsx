import React from "react";
import { LinksFunction } from "@remix-run/node";
import MainText, { links as mainbox } from "~/components/Textshadow/MainText";

const Textshadow = () => {
  return (
    <div>
      <MainText />
    </div>
  );
};

export default Textshadow;
export const links: LinksFunction = () => {
  return [...mainbox()];
};
