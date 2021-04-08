import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function renderConditionally() {
  // if (isLoggedIn) KAKA, you could have said like that too becuase isLoggedIn bullean, but any way to make it easy was like that below
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
    // return (
    //   <form className="form">
    //     <input type="text" placeholder="Username" />
    //     <input type="password" placeholder="Password" />
    //     <button type="submit">Login</button>
    //   </form>
    // );
  }
}

function App() {
  return (
    <div className="container">
      {/* // calling the function here */}
      {renderConditionally()}

      {/* <h1>Hello</h1> */}
      {/* <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form> */}
    </div>
  );
}

export default App;
