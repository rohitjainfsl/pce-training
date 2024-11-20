// in react, whenever state changes the component is reloaded
// this causes an infinite loop
// to break out of this, we use "useEffect", which will only call function getDataFromAPI just once, and not again & again
//useEffect: allows us to execute a code as per our choosing

import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [products, setProducts] = useState([]);

  async function getDataFromAPI() {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
    setProducts(response.data);
  }
  useEffect(() => {
    getDataFromAPI();
  }, []);

  return (
    <>
      <div id="products">
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <a href={`/singleProduct/${product.id}`}>
                <img src={product.image} alt="" />
              </a>
              <h3>
                <a href={`/singleProduct/${product.id}`}>{product.title}</a>
              </h3>
              <p>${product.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
