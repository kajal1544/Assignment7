import { useEffect, useState } from "react";
import "../App.css";

function CartList({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div className="cartPage">
      <table>
        <tr>
          <th className="item__heading">Items</th>
          <th className="item__quantity">Quantity</th>
          <th className="item__price">Price</th>
        </tr>
      </table>

      {CART?.map((cartItem, cartindex) => {
        return (
          <div>
            <table>
              <tr>
                <td className="item__name__data">
                   <img src= {cartItem.url} width={40} alt ="alernate"/>
                  <span> {cartItem.name} </span>
                </td>
                <td className="item__quantity__data">
                  <button
                    onClick={() => {
                      const _CART = CART.map((item, index) => {
                        return cartindex === index
                          ? {
                              ...item,
                              quantity:
                                item.quantity > 0 ? item.quantity - 1 : 0,
                            }
                          : item;
                      });
                      setCART(_CART);
                    }}
                  >
                    -
                  </button>
                  <span> {cartItem.quantity} </span>
                  <button
                    onClick={() => {
                      const _CART = CART.map((item, index) => {
                        return cartindex === index
                          ? { ...item, quantity: item.quantity + 1 }
                          : item;
                      });
                      setCART(_CART);
                    }}
                  >
                    +
                  </button>
                </td>
                <td className="item__price__data">
                  <span> Rs. {cartItem.price * cartItem.quantity} /- </span>
                </td>
              </tr>
            </table>
          </div>
        );
      })}

      <p className="total">
        {" "}
        Total :
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
        <span> /- </span>
        <button className="pay">Pay Now</button>
      </p>
    </div>
  );
}

export default CartList;
