import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddToCart from "../components/AddToCart";

function SingleProduct() {
  const [singleProduct, getSingleProduct] = useState({});
  //to get the product id from the URL
  const { id } = useParams();
  //to get the singleproduct from API
  async function getDataFromAPI() {
    const response = await axios.get("https://fakestoreapi.com/products/" + id);
    console.log(response.data);
    getSingleProduct(response.data);
  }
  useEffect(() => {
    //if id has a truthy value, then only invoke the function
    if (id) getDataFromAPI(id);
  }, []);

  return (
    <>
      {Object.keys(singleProduct).length > 0 ? (
        <div className="singleProduct">
          <div className="left">
            <img src={singleProduct.image} alt="" />
          </div>
          <div className="right">
            <h3>{singleProduct.title}</h3>
            <p>Category: {singleProduct.category}</p>
            <p>{singleProduct.description}</p>
            <p>{singleProduct.price}</p>
            <AddToCart product={singleProduct} />
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
export default SingleProduct;
