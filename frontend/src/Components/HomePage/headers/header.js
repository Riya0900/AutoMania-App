import React from "react";
import useStyles from "./header.style";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logoCar from './carlogo.png';
import {Link} from "react-router-dom";

  import './header.css'

  import { connect } from 'react-redux';

const Header = (props) => {

    const classes = useStyles();

    let total = 0;
    // props.cart.map(product => total += product.p_price * product.quantity);

    return (<div className={classes.mainhead}>
        <div className={classes.navbar}>
            <div className={classes.logocar}>
                <img src={logoCar} className={classes.logocarimg} alt=''></img>
            </div>
            <div className={classes.navsearch}>
                <input type={'text'} placeholder="Search" /><SearchRoundedIcon style={{
                   marginBottom: '-7px', fontSize: '30px', backgroundColor: 'rgb(216, 0, 0)',
                   borderRadius: '40px', color: '#fff', width: '80px',
                   maxHeight: '80px', marginLeft: '-85px'
                }}/>
            </div>
            <div className={classes.profilecheckout}>
                <div className={classes.profile}> <PermIdentityIcon style={{fontSize: '50px'}}/></div><div className={classes.profiletext}><p style={{fontSize: '14px'}}>Login Here</p><h4 style={{fontSize: '18px'}}>My Account</h4></div>
                <div className={classes.cart}> <Link to={'/cart'} ><AddShoppingCartIcon sx={{fontSize: '50px',color:'black'}} /></Link></div><div className={classes.carttext}><p style={{fontSize: '14px'}}>Shopping Cart</p><h4 style={{fontSize: '18px'}}>Checkout</h4></div>
            </div>
        </div>
        <hr />
        <div className={classes.navbar1} id="menu-bar">
            <ul className={classes.itemlist} style={{ textDecoration: 'none', }}>
                    <li>
                        <Link to={'/'} >Home</Link>
                    </li>
                    <li>
                        <Link to={'/shop'} >Shop</Link>
                    </li>
                    <li>
                        <Link to={'/blog'} >Blog</Link>
                    </li>
                    <li>
                        <Link to={'/aboutus'}>About us</Link>
                    </li>
                    <li>
                        <Link to={'/contactus'} >Contact Us</Link>
                    </li>
                    <li>
                        Pages<KeyboardArrowDownRoundedIcon style={{marginBottom:'-7px'}}/>
                        <div className="sublist_1">
                            <ul>
                                <li>Account</li>
                                <li> <Link to={'/wishlist'} >Wishlist</Link></li>
                                <li><Link to={'termcondition'}>Terms and Conditions</Link></li>
                                <li><Link to={'/checkout'}>Checkout</Link></li>
                            </ul>
                        </div>
                    </li>

            </ul>
        </div>
    </div>
    );
};

const mapStateToProps = state => {
    return {
      cart: state.cart
    }
  }

export default connect(mapStateToProps)(Header);