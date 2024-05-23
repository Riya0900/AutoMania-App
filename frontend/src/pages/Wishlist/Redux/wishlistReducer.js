import { categories } from "../../ShopPages/categories";

const ADD_TO_WISH = "ADD_TO_WISH";
const REMOVE_FROM_WISH = "REMOVE_FROM_WISH";

const initalState = {
  wishItem: [],
};

const wishlistReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_WISH:
      let selectedItem = categories.find((item) => item.id === action.id);
      let existed_item = state.wishItem.find((item) => action.id === item.id);

      if (existed_item) {
        let new_items =
          state.wishItem &&
          state.wishItem.filter((item) => action.id !== item.id);
        return {
          ...state,
          wishItem: new_items,
        };
      } else {
        return {
          ...state,
          wishItem: [...state.wishItem, selectedItem],
        };
      }

    case REMOVE_FROM_WISH:
      let new_items =
        state.wishItem &&
        state.wishItem.filter((item) => action.id !== item.id);
      return {
        ...state,
        wishItem: new_items,
      };

    default:
      return state;
  }
};

export default wishlistReducer;
