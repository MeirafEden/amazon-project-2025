import React from "react";
import Header from "../Header/Header";
import LowerHeader from "../LowerHeader/LowerHeader";

function LayOut({ children }) {
  return (
    <>
      <Header />
      <LowerHeader />
      <main>{children}</main>
    </>
  );
}

export default LayOut;

