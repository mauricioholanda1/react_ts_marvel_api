import React from "react";
import Home from "./home";
import { DefaultTemplate } from "../../components/Template/defaultTemplate";

export default function HomeIndex() {
  return (
    <>
      <DefaultTemplate>
        <Home />
      </DefaultTemplate>
    </>
  );
}
