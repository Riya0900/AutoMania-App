import React from 'react';
import { connect } from 'react-redux';
import useWish from './Wish.style';

import { IconButton ,Box} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { removeFromWish } from './Redux/Actions';
import {Link} from "react-router-dom";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';

const Wish = ({wishlist ,removeFromWish}) => {
  
  const classes = useWish();
  return (
    <>
    {console.log(wishlist)}
      {wishlist && wishlist.length !== 0 ? (
        <div className={classes.wish_container}>
          <p className={classes.wish_header}><b>My Wishlist</b></p>
          <div className={classes.table_container}>
            <table className={classes.main_table}>
              <thead className={classes.table_thead}>
                <tr className={classes.tr_tag}>
                  <th className={classes.head_th} style={{width : '6%'}}></th>
                  <th className={classes.head_th} style={{width : '10%'}}></th>
                  <th className={classes.head_th} style={{width : '70%'}}>Product Name</th>
                  <th className={classes.head_th}>Product Price</th>
                </tr>
              </thead>
              <tbody>
                {wishlist && wishlist.map(product =>
                  <tr key={product.id} className={classes.tr_tag} >
                    <td className={classes.td_style}>
                      <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={() => removeFromWish(product.id)}
                        className={classes.atag}
                      >
                        <CloseIcon fontSize="inherit" color="error"/>
                      </IconButton>
                    </td>
            
                    <td className={classes.td_style}>
                      <div className={classes.thumbnail_img}>
                        <img className={classes.img_style} src={product.pic} alt={product.name} />
                      </div>
                    </td>
                    
                    <td className={classes.td_style}>
                      <p className={classes.td_name}>{product.name}</p>
                    </td>
                    
                    <td className={classes.td_style_price}>
                      ${product.price}.00
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <p className={classes.wish_footer}><b>Share On:</b></p>
          <Box sx={{marginTop: '2px'}}>
            <IconButton><FacebookRoundedIcon className={classes.wish_footer_fb}/></IconButton>
            <IconButton><TwitterIcon className={classes.wish_footer_tw}/></IconButton>
            <IconButton><PinterestIcon className={classes.wish_footer_pin}/></IconButton>
            <IconButton><EmailRoundedIcon className={classes.wish_footer_mail}/></IconButton>
            <IconButton><WhatsappRoundedIcon className={classes.wish_footer_wp}/></IconButton>
          </Box>
        </div>
      ) : 
      (
        <div className={classes.empty_return}>
          <div className={classes.empty_wish}>
            <p>Your Wishlist is currently empty.</p>
          </div>
          <Link to={'/Shop'} style={{color: 'red', fontSize : 20}}>Return to Shop</Link>
        </div>
      )}
    </>
  );
}
    
const mapStateToProps = state => {
  return {
    wishlist : state.wishlist.wishItem
  }
}
    
const mapDispatchToProps = dispatch => {
  return {
    removeFromWish(id) {
      dispatch(removeFromWish(id));
    }
  };
};   
    
export default connect(mapStateToProps, mapDispatchToProps)(Wish);  