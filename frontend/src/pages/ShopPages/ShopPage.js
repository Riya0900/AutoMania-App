import React,{useState} from 'react';
import useShop from './ShopPage.style';

import {Box , Paper, styled , Grid ,Slider , Rating , Button ,Pagination,IconButton,Divider, FormControlLabel, Checkbox} from '@mui/material';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addToCart } from '../Shopcartbill/actionCreators';
import {categories} from './categories';
import { connect } from 'react-redux';
import { addToWishlist, removeFromWish } from '../Wishlist/Redux/Actions';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

function valueLabelFormat(value1) {
    const units = [""];
    let unitIndex = 0;
    let scaledValue1 = value1;
    return `${scaledValue1} ${units[unitIndex]}`;
}

function calculateValue(value1, value2) {
    return "$" + value1 + "- $" + value2;
}

function ShopPage(cart,wishlist){
    const classes = useShop();
    const Items=[
        {
            name: "Body Parts",
            no : "(2)",
        },
        {
            name: "Brakes & Suspension",
            no : "(3)",
        },
        {
            name: "Engine & Drivetrain",
            no : "(9)",
        },
        {
            name: "Headlights & Lighting",
            no : "(5)",
        },
        {
            name: "Interior Parts",
            no : "(6)",
        },
        {
            name: "Tools & Garage",
            no : "(5)",
        },
    ]

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      const [value1, setValue1] = useState(360);
      const [value2, setValue2] = useState(2360);
    
      const handleChange1 = (event, newValue1) => {
        setValue1(newValue1);
      };
      const handleChange2 = (event, newValue2) => {
        setValue2(newValue2);
      };

      const product= [
          {
            img: 'https://themebing.com/wp/sayara/wp-content/uploads/2020/04/e-p-6-1-400x400.jpg',
            d1 : 'Powerstroke Engines ',
            d2 : 'Turbo Air Products',
          },
          {
            img: 'https://themebing.com/wp/sayara/wp-content/uploads/2020/04/Repair-Parts-41-400x400.jpg',
            d1 : 'OE Replacement',
            d2 : 'Engine',
          },
          {
              img : 'https://themebing.com/wp/sayara/wp-content/uploads/2020/04/prod_2_deposit_opt-600x600.jpg',
              d1: 'Air Intake Pump',
              d2: ' ',
          }
      ];

      const avgrate=[
          {
            id: 8,
            rate : 5,
          },
          {
            id:8,
            rate : 4,
          },
          {
            id: 4 ,
            rate : 3,
          },
          {
            id: 4,
            rate : 2,
          },
          {
            id: 3,
            rate : 1,
          },
      ];

      const tag = [
        {
            t1: 'Accessories',
            t2 : 'Air Filters',
        },
        {
            t1: 'Brake Discs',
            t2 : 'Bumpers',
        },
        {
            t1: 'Car Care',
            t2 : 'Car Covers',
        },
        {
            t1: 'Corner Lights',
            t2 : 'Floor Mats',
        },
        {
            t1: 'Fog Lights',
            t2 : 'Hoods',
        },
        {
            t1: 'Wheel Hubs',
            t2 : 'Wheels',
        },
      ];

    const itemsPerPage = 12;
    const [page, setPage] = useState(1);
    const [noOfPages] =useState(
        Math.ceil(categories.length / itemsPerPage)
    );
      
    const handlePage = (event, value) => {
        setPage(value);
    };

    const handleCart = (id)=>{
        cart.addToCart(id); 
    }

    const handleWish = (id) => {
        cart.addToWishlist(id); 
      }

    return(

            <Box className={classes.bg}>
                <div fixed className={classes.cont}>
                    <div className={classes.header}>
                        <p className={classes.headerpara}>Showing 1-12 of 100 results</p>
                    </div>

                    <div>
                        <Grid container spacing={3} className={classes.body}>

                            <Grid item xs={3}>
                                <Item className={classes.col1}>
                                    <div className={classes.filter}>
                                        <p className={classes.col1p}> <b> Product categories </b> </p>
                                        <hr className={classes.hr1}/>
                                        {Items && Items.map((i)=>(
                                            <div className={classes.items}>
                                                <Box className={classes.box}>
                                                    <p className={classes.headerpara}> {i.name}</p>
                                                </Box>
                                                <p className={classes.headerpara}> {i.no}</p>
                                            </div>
                                        ))}    
                                    </div>               
                                        
                                    <div className={classes.filter}>
                                        <p className={classes.col1p}> <b> Filter by price </b> </p>
                                        <hr className={classes.hr1}/>
                                        <Slider
                                            className={classes.Slider}
                                            value={(value1, value2)}
                                            min={360}
                                            step={10}
                                            max={2360}
                                            scale={calculateValue}
                                            getAriaValueText={valueLabelFormat}
                                            valueLabelFormat={valueLabelFormat}
                                            onChange={(handleChange1, handleChange2)}
                                            aria-labelledby="non-linear-slider"
                                        />
                                        <div>
                                            <p className={classes.filterprice}> Price: {valueLabelFormat(calculateValue(value1, value2))}</p>
                                            <Button variant="contained" className={classes.btn1}>Filter</Button>
                                        </div>
                                    </div>

                                    <div className={classes.filter}>
                                        <p className={classes.col1p}><b>Recent Products </b></p>
                                        <hr className={classes.hr1}/>
                                        {product && product.map((p)=>(
                                            <div className={classes.pro}>
                                                <img src={p.img} alt='' className={classes.smallpic}/>
                                                <p className={classes.recent_proname}>{p.d1}<br/>{p.d2}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className={classes.filter}>
                                        <p className={classes.col1p}><b>Average rating </b></p>
                                        <hr className={classes.hr1}/>
                                        {avgrate && avgrate.map((r)=>(
                                            <div className={classes.ar}>
                                                <p className={classes.avgrate}>({r.id})</p>
                                                <Rating name="read-only" defaultValue={r.rate} readOnly className={classes.rate} />
                                            </div>
                                        ))}
                                    </div>

                                    <div className={classes.productTags}>
                                        <p className={classes.col1p}><b>Product tags </b></p>
                                        <hr className={classes.hr1}/>
                                        {tag && tag.map((t)=>(
                                            <div className={classes.protag}>
                                                <div className={classes.tags}>
                                                    <p className={classes.tag}>{t.t1}</p>
                                                </div>
                                                <div className={classes.tags}>
                                                    <p className={classes.tag}>{t.t2}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                        
                                </Item>
                            </Grid>
                                        
                            <Grid item xs={9} className={classes.products}>
                                {categories && categories.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(c => {
                                    console.log("cart",cart)
                                    return (
                                        <div className={classes.cat}>
                                            <div className={classes.like}>
                                                <FormControlLabel 
                                                    control={
                                                        <Checkbox 
                                                            icon={<FavoriteBorder />} 
                                                            checkedIcon={<FavoriteIcon color='error'/>}
                                                            onClick={()=>{handleWish(c.id)}}
                                                        />}
                                                    label=""
                                                />
                                                <img src={c.pic} alt='' className={classes.productpic}/>
                                            </div>
                                            <hr className={classes.hr2}/>
                                            <p className={classes.col1p}><b>{c.name}</b></p>
                                            <Box className={classes.prices}><b>{c.price}.00$</b></Box>
                                            <Box sx={{display: 'inline-block',maxWidth : '7vw'}}><Rating name="read-only" defaultValue={c.rate} precision={c.precise} readOnly className={classes.rate} /></Box>
                                            <Button
                                                type = 'button' 
                                                variant='contained' 
                                                value= 'Add to cart'
                                                className={classes.btn2} 
                                                onClick={()=>{handleCart(c.id)}}
                                            >
                                                Add to cart
                                            </Button>  
                                        </div>
                                    );
                                })}
                                        
                                <Divider/>
                                <Box component="span">
                                    <Pagination 
                                        count={noOfPages}
                                        page={page}
                                        onChange={handlePage}
                                        defaultPage={1}
                                        color='error'
                                        size="large"
                                        shape="rounded"
                                        classes={{ ul: classes.paginator }}
                                    />
                                </Box>

                            </Grid>                       
                                
                        </Grid>
                    </div>
                    
                </div>
            </Box>
    );
}

const mapStateToProps = (state)=>{
    return {
      cart : state.cart
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        addToWishlist: (id)=>{dispatch(addToWishlist(id))},
        removeFromWish: (id)=>{dispatch(removeFromWish(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage)