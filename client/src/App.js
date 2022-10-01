import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  //const [packages, setPackages] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("/list").then((res) => {
      console.log(res.data);
      setList(res.data.list)
    });
  }, []);

  return (
    
    <div className="App">
      
      
      {list.length ? (
      <div>
      <h1>List</h1> 
      <ul>
        {list.map(item => <li>{item}</li>)}
      </ul>
      </div>
      ): 
      (<h1>Loading....</h1>)}    
    </div>
  );
}

export default App;
