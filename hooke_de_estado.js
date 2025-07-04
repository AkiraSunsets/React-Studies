import React, { useState } from "react";

function App(){
  
  const [count, SetCount] = useState(0);
  const [nome, setNome] = useState("João");

  return(
    <div>
      <p>
        You clicked {count} times
      </p>
      <button onClick={() => SetCount(count + 1)}> //create a operation to click
        Click me
      </button> 
    </div>
  );
 }

 export default App;
