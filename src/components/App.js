import React, { useState } from "react";
import Child from "./Child";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div>
      <h1>Parent Component</h1>
      <Child isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
    </div>
  );
};

export default App;
