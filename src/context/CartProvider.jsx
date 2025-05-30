import React, { createContext, useReducer } from "react";
import { toast, Bounce } from "react-toastify"; 
export const CartContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      const isExist = state.find((item) => item.id == action.payload.id);
      if (isExist) {
        return state;
      } else {
        toast.success(action.payload.name + 'is added to the cart', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return [...state, { ...action.payload, qty: 1 }];
      }
    case "remove":
      return state.filter((item) => item.id !== action.payload);
    case "increment":
      return state.map((item) =>
        item.id == action.payload ? { ...item, qty: item.qty + 1 } : item
      );

    case "decrement":
      return state.map((item) =>
        item.id == action.payload ? { ...item, qty: item.qty - 1 } : item
      );
    case "clearCart":
      return [];
    default:
      return state;
  }
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
