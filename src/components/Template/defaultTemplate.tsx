import React, { PropsWithChildren } from "react";
import { Header } from "../Header";

export function DefaultTemplate({
  children,
}: PropsWithChildren<unknown>): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
