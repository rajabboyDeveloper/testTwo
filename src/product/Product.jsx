import React, { useState, useEffect } from "react";
import "./Product.css";
import axios from "axios";
import Card from "./card/Card";
function Product() {
  const [first, setfirst] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/events").then((resp) => {
      let allResp = resp.data.data;
      setfirst(allResp);
    });
  }, []);

  return (
    <div className="product">
      {first.map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title}
            url={item.url}
            category={item.category}
            content={item.content}
            slug={item.slug}
          />
        );
      })}
    </div>
  );
}

export default Product;
