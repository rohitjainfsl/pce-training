// WE WILL NOT DO DOM MANIPULATION DIRECTLY IN REACT

import { useState } from "react";

function Counter() {
  //   let counter = 0;
  const [counter, setCounter] = useState(0);
  // const counter = 0;
  // function setCounter(x){
  //     counter = x;
  // }

  //   setCounter(10);
  //   function handleDecrement() {
  //     // counter--;
  //     setCounter(counter - 1);
  //     // console.log(counter);
  //   }
  //   function handleIncrement() {
  //     // counter++;
  //     setCounter(counter + 1);
  //     // console.log(counter);
  //   }

  function handleChange(sign) {
    if (sign === "+") setCounter(counter + 1);
    else setCounter(counter - 1);
  }

  return (
    <>
      <button onClick={() => handleChange("+")}>Increment</button>
      <p>{counter}</p>
      <button onClick={() => handleChange("-")}>Decrement</button>
    </>
  );
}
export default Counter;
