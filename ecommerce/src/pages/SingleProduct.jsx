import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    if (id) getDataFromAPI(id);
  }, []);

  return (
    <>
      <div className="singleProduct">
        <div className="left">
          <img src={singleProduct.image} alt="" />
        </div>
        <div className="right">
          <h3>{singleProduct.title}</h3>
          <p>Category: {singleProduct.category}</p>
          <p>{singleProduct.description}</p>
          <p>{singleProduct.price}</p>
        </div>
      </div>
    </>
  );
}
export default SingleProduct;
