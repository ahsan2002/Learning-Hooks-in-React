import React from "react";
import { FirstName, LastName } from "./App";

const ComC = () => {
  return (
    <>
    {/* using context API */}
      <FirstName.Consumer>
        {(firstname) => {
          return (
            <LastName.Consumer>
              {(lastname) => {
                return (
                  <h1>
                    My name is {firstname} {lastname}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default ComC;
