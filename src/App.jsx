import React, { useState,useEffect } from "react";
// import ComA from "./CompA";
// const FirstName = createContext();
// const LastName = createContext();

const App = () => {
  const [num, setnum] = useState(0);
  const [num1, setnum1] = useState(0);

  //Use Effect Hook!
  //1-we use UseEffect hook when we want to show something after render.

  //2-When we use empty array [],that means you want to show this only one time when the page is loaded at first.

  //3-When we write something in that array that it means that we want to run useEffct on that specific thing only.

  useEffect(()=>{
    // alert("i am clicked");
    document.title=`You Clicked me ${num} times`
  },[num]);

  const mynum=()=>{
      setnum(num+1);
  }

  // const mynum1=()=>{
  //     setnum1(num1+1);
  // }

  return (
    <>
      {/* <FirstName.Provider value={"Ahsan"}>
        <LastName.Provider value={"Omerjee"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider> */}


      <button onClick={mynum}>Click me {num}</button>
      {/* <button onClick={mynum1}>Click me {num1}</button> */}

    </>
  );
};

export default App;
// export { FirstName, LastName };