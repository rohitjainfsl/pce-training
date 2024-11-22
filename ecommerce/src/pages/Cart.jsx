import { useAppContext } from "../context/AppContext";

function Cart() {
  const { cart } = useAppContext();
  return (
    <>
      <div className="cartItems">
        {cart.map((item) => {
          return (
            <div className="item" key={item.id}>
              <div className="left">
                <img src={item.image} alt="" />
              </div>
              <div className="right">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <div className="quantity">
                  <div className="buttons">
                    <button>+</button>
                    <p>1</p>
                    <button>-</button>
                  </div>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cartTotal"></div>
    </>
  );
}
export default Cart;
