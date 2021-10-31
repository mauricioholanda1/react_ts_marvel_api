import React from "react";
import CharacterDetail from "./characterDetail";
import { DefaultTemplate } from "../../components/Template/defaultTemplate";

export default function CharacterDetailIndex() {
  return (
    <>
      <DefaultTemplate>
        <CharacterDetail />
      </DefaultTemplate>
    </>
  );
}
