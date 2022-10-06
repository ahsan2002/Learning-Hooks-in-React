import React, { useContext } from "react";
import ComC from "./CompC";
import { FirstName, LastName } from "./App";

const ComB = () => {
    // using useContext hook
    const fname= useContext(FirstName);
    const lname = useContext(LastName);
  return (
    <h1>my name is {fname} {lname}</h1>
  );
};

export default ComB;
