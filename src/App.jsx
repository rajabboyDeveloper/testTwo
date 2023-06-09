import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./Card";
function App() {
  const [eva, setEva] = useState([]);
  useEffect(() => {
    axios
      .get("https://admin.taffeine.com/api/home/what_product")
      .then((resp) => {
        let allEva = resp.data.data;
        setEva(allEva);
      });
  }, []);

  return (
    <div className="container">
      <div className="evbox">
        {eva.map((item, index) => {
          return (
            <Card
              key={index}
              id={item.id}
              url={item.url}
              short={item.short_content}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
