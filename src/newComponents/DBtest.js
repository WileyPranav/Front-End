import { useState } from "react";
import Products from "../DBuse/Products";


const DBTest = () => {
    const [products, setProducts] =useState(null);

    const getData = ()=>{
    fetch("http://localhost:9090/products")
    .then(res=>{
        return res.json();
    }).then(data=>{
        setProducts(data);
    })
    }
  return (
    <div className="home">
      <button onClick={getData}>Click here</button>
      {products && <Products products={products}/>}
    </div>
  );
}

export default DBTest;