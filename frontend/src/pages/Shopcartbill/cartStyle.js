import {makeStyles} from '@mui/styles';

const useCart = makeStyles({

cart_container:{
  margin: '20px'
},

table_container:{
  width: '100%',
  height: '100%'
},

main_table:{
  width: '100%',
  height: '100%',
borderCollapse: 'collapse',

"& tr":{
  borderBottom: '1px solid lightgrey',
},

},

head_th:{
  fontSize: '20px',
  lineHeight: '26px',
  margin: 0,
  oveFlow: 'visible',
  padding: '12px',
  color: '#808080',
},

tr1_tag:{
  margin: '10px'
},

td_style:{
  justifyContent: 'space-between',
  textAlign: 'center',
  alignItems: "center",
},

img_style: {
  maxWidth: '100%',

},

thumbnail_img :{
  minWidth: '100px',
  width: '100px',
  display: 'inline-block',
  textAlign: 'center',
  justifyContent:'center',
  alignItems: 'center',

},

atag: {
  cursor: 'pointer',
},

td_quantity:{
  display: 'inline-block',
  textAlign: 'center',
  justifyContent:'center',
  alignItems: 'center'
},

cart_product_quantity: {
  display: "flex",
  justifyContent: "center",
  width: "130px",
  maxWidth: "100%",
  border: "05px solid rgb(177, 177, 177)",
  borderRadius: "5px",
  textAlign: 'center',
  alignItems: 'center',

  height: "40px",
  "&:hover": {
    color: "black"
  }
},

td_style_price:{
  color: '#808080',
},

button2: {
  border: "none",
  outline: "none",
  background: "none",
  padding: "07rem 15rem",
  cursor: "pointer"
},

count: {
  textAlign: "center",
  padding: "10px"
},

tr_cr:{
  borderBottom: '0 !important',
},

actions:{
  textAlign: 'right',
  wordBreak: 'normal',
  paddingTop: '30px',
  paddingBottom: '50px',
  boxSizing: 'border-box',
},

coupon:{
  float: 'left',
},

input_text:{
  width: '250px !important',
  float: 'left',
  marginRight: '15px',
  border: '1px solid #dfdfdf',
  height: '50px',
  padding: '0 15px',
  borderRadius: '50px',
  fontSize: '16px',
},

button:{
  background: 'linear-gradient(to right, #E52727, #E52727)',
  cursor: 'pointer',
  color: '#fff',
  fontSize: '16px',
  borderRadius: '50px',
  height: '50px',
  padding: '0 50px',
  border: 'none',
},

cart_collaterals:{
  width: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
},

cart_totals:{
  float: 'right',
  width: '48%',
  boxSizing: 'border-box',
  textAlign: 'left',
},

cart_total_head:{
  margin: '30px auto 30px',
    fontWeight: 500,
    fontStyle: 'normal',
    color: '#333',
    fontSize: '2rem',
    lineHeight: 1.2,
},

shop_table:{
  borderCollapse: 'collapse',
  width: '100%',
},

th_text:{
  padding: '1rem',
  border: '2px solid #dfdfdf',
  color: '#808080',
},

price_amount:{
  color: 'black'
},

proceed_to_checkout:{
  boxSizing: 'border-box',
},

checkout_button:{
  marginTop: '30px',
  fontSize: '16px',
  height: '50px',
  color: '#fff',
  textDecoration: 'none',
  background: 'linear-gradient(to right, #E52727, #E52727)',
  display: 'inline-block',
  padding: '10px 50px',
  borderRadius: '50px',
  cursor: 'pointer',
  border: '1px solid',
},

empty_return:{
  textAlign: 'left',
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginBottom: '24px',
  marginTop: '24px',
},

empty_cart:{
  marginBottom: '30px',
  marginLeft: 0,
  padding: '20px 30px',
  listStyle: 'none',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#eee',
  borderTop: '2px solid',
},

return_cart:{
  color: '#E52727',
  padding: '20px 30px',
  textDecoration: 'none',

},

})

export default useCart;