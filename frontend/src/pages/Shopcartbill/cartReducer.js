import { categories } from "../ShopPages/categories";

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const INCREAMENT = "INCREAMENT";
const DECREAMENT_ITEM = "DECREAMENT_ITEM";
const REMOVEALL = "REMOVEALL";

const initalState = {
  cartItem: [],
  total: [],
  wishItem: [],
};

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let selectedItem = categories.find((item) => item.id === action.id);

      let existed_item = state.cartItem.find((item) => action.id === item.id);
      if (existed_item) {
        state.cartItem.quantity += 1;
        return {
          ...state,
          total: state.total + state.cartItem.price,
        };
      } else {
        selectedItem.quantity = 1;

        let newTotal = state.total + selectedItem.price;
        return {
          ...state,
          cartItem: [...state.cartItem, selectedItem],
          total: newTotal,
        };
      }

    case REMOVE_FROM_CART:
      let itemToRemove =
        state.cartItem && state.cartItem.find((item) => action.id === item.id);
      let new_items =
        state.cartItem &&
        state.cartItem.filter((item) => action.id !== item.id);
      let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      return {
        ...state,
        cartItem: new_items,
        total: newTotal,
      };

    case INCREAMENT:
      let incresedItem = state.cartItem.find((item) => item.id === action.id);
      incresedItem.quantity += 1;
      let incresedTotal = state.total + incresedItem.price;
      return {
        ...state,
        total: incresedTotal,
      };

    case DECREAMENT_ITEM:
      let decresedItem =
        state.cartItem && state.cartItem.find((item) => item.id === action.id);
      decresedItem.quantity -= 1;
      let decresedtotal = state.total - decresedItem.price;
      return {
        ...state,
        total: decresedtotal,
      };

    case REMOVEALL:
      return {
        ...state,
        cartItem: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
