import React from "react";
// import axios from "axios";
import { Routes,Route} from "react-router-dom";
// import ComA from "./CompA";
// const FirstName = createContext();
// const LastName = createContext();
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";

const App = () => {
//   const [num, setnum] = useState(0);
//   const [num1, setnum1] = useState(0);

//   //Use Effect Hook!
//   //1-we use UseEffect hook when we want to show something after render.

//   //2-When we use empty array [],that means you want to show this only one time when the page is loaded at first.

//   //3-When we write something in that array that it means that we want to run useEffct on that specific thing only.

//   useEffect(()=>{
//     // alert("i am clicked");
//     document.title=`You Clicked me ${num} times`
//   },[num]);

//   const mynum=()=>{
//       setnum(num+1);
//   }

//   // const mynum1=()=>{
//   //     setnum1(num1+1);
//   // }

//   return (
//     <>
//       {/* <FirstName.Provider value={"Ahsan"}>
//         <LastName.Provider value={"Omerjee"}>
//           <ComA />
//         </LastName.Provider>
//       </FirstName.Provider> */}


//       <button onClick={mynum}>Click me {num}</button>
//       {/* <button onClick={mynum1}>Click me {num1}</button> */}

//     </>
//   );
// };

//**getting api using axios**
// useEffect(()=>{
//   // alert('hi');
//   async function getdata(){
//     const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
//     console.log(res.data.name);
//     console.log(res.data.moves);
//     setname1(res.data.name);
//     setmove(res.data.moves.length);
//     // setmove(res.data.moves[0].move.name);

//   }
//   getdata();
// })
// const[num,setnum]=useState();
// const[name1,setname1]=useState();
// const[move,setmove]=useState();



// return(
// <>
// <h1>You chose <span style={{color:"red"}}> {num} </span>value</h1>
// <h1>My name is  <span style={{color:"red"}}>{name1}</span></h1>
// <h1>I have  <span style={{color:"red"}}>{move}</span> moves</h1>

// <select value={num} onChange={(event)=>{
//       setnum(event.target.value)
// }}>
//   <option value="1">1</option>
//   <option value="25">25</option>
//   <option value="3">3</option>
//   <option value="4">4</option>
//   <option value="6">6</option>
// </select>
// </>
// )


//react router
return(
  <>
{/* if only '/',it means root pr jana hai! */}

<Routes>
  <Route exact path="/" element={<About/>}  />
  <Route path="/contact" element={<Contact/>} />
  {/* if we want to show user a error when a user writes a path that doesnot exits so we give '*' in path in route tag */}
  <Route path="*" element={<Error/>} />
</Routes>

  {/* <About/>
  <Contact/> */}
  </>
)

}


export default App;
// export { FirstName, LastName };