import "./App.css";
import React from "react";
import axios from "./axiosConfig";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import Cart from "./Cart";

function App() {
  //store all the fetched products
  const [products, setProducts] = useState([]);
  //get data from the backend node server
  const getData = async () => {
    axios
      .get("/")
      .then((res) => {
        if(products.length>0){
          setProducts([...products, ...res.data]);
        }
        else {
          setProducts(res.data)
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const onScroll = (event) => {
    var node = event.target;
    const bottom =
      node.scrollHeight - parseInt(node.scrollTop) === node.clientHeight;
    if (bottom) {
      //when it reaches bottom, get data again from server and append it to existing list of products
      getData();
    }
  };
  return (
    <div className="app" onScroll={(e) => onScroll(e)}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/" element={<Feed products={products} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
