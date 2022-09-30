import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("/list").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <h1>List!</h1>
    </div>
  );
}

export default App;
