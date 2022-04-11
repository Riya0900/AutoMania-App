import React from 'react';
import { removeFromCart, increamentFromCart, decreamentFromCart, removeallFromCart } from '../actionCreators';
import { connect } from 'react-redux';
import useCart from '../cartStyle';

import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {Link} from "react-router-dom";

const ShoppingCart = ({cart,removeFromCart,increamentFromCart,decreamentFromCart,removeallFromCart}) => {

  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  
  let total = cart ? cart.reduce(addition,0) : 0
  // if(cart){
  //   cart.map(product => total += product.price * product.quantity);
  // }

  const classes = useCart();

  return (
    <>
    {cart && cart.length !== 0 ? (
    <div className={classes.cart_container}>

    <div className={classes.table_container}>
      <table className={classes.main_table}>
        <thead className={classes.table_thead}>
          <tr className={classes.tr_tag}>
            <th className={classes.head_th}></th>
            <th className={classes.head_th}></th>
            <th className={classes.head_th}> PRODUCTS</th>
            <th className={classes.head_th}>PRICE</th>
            <th className={classes.head_th}>QUANTITY</th>
            <th className={classes.head_th}>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product =>
            <tr key={product.id} className={classes.tr_tag}>
              <td className={classes.td_style}>
                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={() => removeFromCart(product.id  )}
                  className={classes.atag}
                >
                  <CloseIcon fontSize="inherit" color='error'/>
                </IconButton>
              </td>

              <td className={classes.td_style} >
                <div className={classes.thumbnail_img}>
                <img className={classes.img_style} src={product.pic} alt={product.name} />
                </div>
              </td>

              <td className={classes.td_style}>
                <p className={classes.f3_mb2}>{product.name}</p>
              </td>

              <td className={classes.td_style_price}>
              ${product.price}.00
              </td>

              <td className={classes.td_style} >
                <div className={classes.td_quantity}>
                <div className={classes.cart_product_quantity}>
                    <IconButton
                      className={classes.button2}
                      size="small"
                      onClick={() => increamentFromCart(product.id)}
                    >
                      <AddIcon fontSize="inherit" />
                    </IconButton>
                    <div className={classes.count}> {product.quantity}</div>

                    <IconButton
                      className={classes.button2}
                      size="small"
                      onClick={() => {
                        if (product.quantity > 1) {
                          decreamentFromCart(product.id);
                        } else {
                          removeFromCart(product.id);
                        }
                      }}
                    >
                      <RemoveIcon fontSize="inherit" />
                    </IconButton>
                  </div>
                  </div>
              </td>

              <td className={classes.td_style_price} >${product.price * product.quantity}</td>
            </tr>

          )}
           <tr className={classes.tr_cr}>
          <td colspan="6" className={classes.actions}>
            <button type="submit" className={classes.button} onClick={removeallFromCart}>
                Remove cart
            </button>

          </td>
        </tr>
        </tbody>
      </table>
    </div>


    <div className={classes.cart_collaterals}>
      <div className={classes.cart_totals }>

        <h2 className={classes.cart_total_head}>Cart totals</h2>

        <table cellspacing="0" className={classes.shop_table}>

            <tbody className={classes.thead_total}>
              <tr className={classes.cart_subtotal}>
              <th className={classes.th_text}>Subtotal</th>
              <td className={classes.th_text}><span >
                <bdi><span className={classes.Price_currencySymbol}>$</span>{total}.00</bdi></span>
              </td>
            </tr>

            <tr className={classes.order_total}>
              <th className={classes.th_text}>Total</th>
              <td className={classes.th_text}><strong><span className={classes.price_amount}>
                <bdi><span className={classes.Price_currencySymbol}>$</span>{total}.00</bdi></span></strong>
              </td>
            </tr>

          </tbody>
        </table>

        <div className={classes.proceed_to_checkout}>
          <Link to={'/Checkout'} className={classes.checkout_button}>Proceed to checkout</Link>
        </div>
      </div>
    </div>
  </div>
     ) : (<div className={classes.empty_return}>
      <div className={classes.empty_cart}>
        <p>Your cart is currently empty.</p>
      </div>
      <Link to={'/Shop'} style={{color: 'red', fontSize : 20}}>Return to Shop</Link>
    </div>)}
  </>);
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cartItem,
    total: state.cart.total
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(id) {
      dispatch(removeFromCart(id));
    },
    increamentFromCart(id){
      dispatch(increamentFromCart(id));
    },
    decreamentFromCart(id){
      dispatch(decreamentFromCart(id));
    },
    removeallFromCart(){
      dispatch(removeallFromCart( ));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);