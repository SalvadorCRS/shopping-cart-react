import { useReducer } from "react";
import { CartContext } from "./CartContext";

const initialState = [];

export const CartProvider = ({ children }) => {
  const addpurchase = (purchase) => {
    purchase.amount = 1;
    const action = {
      type: "[CARRITO] add purchase",
      payload: purchase,
    };
    dispatch(action);
  };
  const moreamount = (id) => {
    const action = {
      type: "[CARRITO] increase amount",
      payload: id,
    };
    dispatch(action);
  };
  const lessamount = (id) => {
    const action = {
      type: "[CARRITO] decrease amount",
      payload: id,
    };
    dispatch(action);
  };
  const deletepurchase = (id) => {
    const action = {
      type: "[CARRITO] delete purchase",
      payload: id,
    };
    dispatch(action);
  };

  const purchaseReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[CARRITO] add purchase":
        return [...state, action.payload];

      case "[CARRITO] increase amount":
        return state.map((item) => {
          const cont = item.amount + 1;
          if (item.id === action.payload) return { ...item, amount: cont };
          return item;
        });
      case "[CARRITO] decrease amount":
        return state.map((item) => {
          const cont = item.amount - 1;
          if (item.id === action.payload && item.amount > 1)
            return { ...item, amount: cont };
          return item;
        });

      case "[CARRITO] delete purchase":
        return state.filter((purchase) => purchase.id !== action.payload);
      default:
        return state;
    }
  };
  const [purchaselist, dispatch] = useReducer(purchaseReducer, initialState);
  return (
    <CartContext.Provider
      value={{
        purchaselist,
        addpurchase,
        moreamount,
        lessamount,
        deletepurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
