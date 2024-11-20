import { useAppContext } from "../context/AppContext";

function AddToCart({ product }) {
  const { addToCart } = useAppContext();
  return (
    <>
      <div className="addToCart">
        <button onClick={() => addToCart(product)}>Add To Cart</button>
      </div>
    </>
  );
}
export default AddToCart;
