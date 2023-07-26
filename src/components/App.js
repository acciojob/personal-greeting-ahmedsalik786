
import React, { useState } from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  let [name,setName]=useState();
  function fun(e){
    setName(e.target.value)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input type="text" onChange={fun} name="" id="" />
        {
          name && (<p>Hello {name}!</p>)
        }
        
    </div>
  )
}

export default App
