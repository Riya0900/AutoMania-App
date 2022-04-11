const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const INCREAMENT = 'INCREAMENT';
const DECREAMENT_ITEM = 'DECREAMENT_ITEM';
const REMOVEALL = 'REMOVEALL';

const addToCart= (id)=>{
  return{
      type: ADD_TO_CART,
      id
  }
}

const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}

const increamentFromCart = (id) => {
  return {
    type:INCREAMENT,
    id
  }
}

const decreamentFromCart = (id) => {
  return {
    type: DECREAMENT_ITEM,
    id
  }
}

const removeallFromCart = () => {
  return {
    type: REMOVEALL,
  }
}

export {addToCart, removeFromCart, increamentFromCart, decreamentFromCart, removeallFromCart};
