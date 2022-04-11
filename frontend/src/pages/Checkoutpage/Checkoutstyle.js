import {makeStyles} from '@mui/styles';

const useCheckout = makeStyles({

checkoutmain:{
    padding: '30px',
    borderRadius: '6px',
    background: '#fff',
    overflow: 'hidden',
    textAlign: 'left',
},

entrycheck1 :{
    background: '#eee',
    borderTop: '2px solid',
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    marginTop: '10px',
},

paratext:{
    marginLeft: 0,
    padding: '20px 30px',
    background: '#fafafa',
    listStyle: 'none',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
},

righttext:{
    color: 'rgb(216, 0, 0)',
},

form :{
    display: 'block',
    marginTop: '0px',
},

col_1:{
    paddingRight: '1.5vw',
    maxWidth: 'unset',
    flex: '0 0 8.333333%',
},

col_1_1:{
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
},

commonhead:{
    fontWeight: '500 !important',
    fontStyle: 'normal',
    color: '#333',
    margin: '30px auto !important',
    fontSize: '28px !important',
    fontFamily: 'Rubik',
},

firstrow:{
    display: 'inline-block',
    marginBottom: '10px',
    width: '100%',
},

row:{
    marginBottom: '18px !important',
    overflow: 'visible',
    display: 'block',
    lineHeight: '26px',
    color: '#808080',
    fontSize: '16px',
    overflowWrap: 'break-word',
    marginRight: '-5px',
    marginLeft: '-5px',
    flexWrap: 'wrap',
},

row1:{
    width: '47%',
    float: 'left',
},

row2:{
    width: '47%',
    float: 'right',
},

commrow:{
    width: '100%',
},

row4_select:{
    boxSizing: 'border-box',
    width: '100%',
    height: '50px',
    transition: '.3s linear',
},

row5_address:{
    border: 0,
    clip: 'rect(1px,1px,1px,1px)',
    webkitClipPath: 'inset(50%)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute!important',
    width: '1px',
    wordWrap: 'normal!important',
},

stext:{
    display: 'flex',
    alignItems: 'center',
},

input_text :{
    boxSizing: 'border-box',
    border: '1px solid #dfdfdf',
    width: '100%',
    height: '50px',
    padding: '0 15px !important',
    borderRadius: '50px',
    transition: '.3s linear',
},

required:{
    color: 'rgb(216, 0, 0)',
},

textarea :{
    margin: 0,
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
},

col_1_2:{
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
},

ordercomment:{
    width: '100%',
    border: '1px solid #dfdfdf',
    transition: '.3s linear',
    borderRadius: '6px',
    height: '160px',
    padding: '20px',
    overflow: 'auto',
    resize: 'vertical',
},

col_2:{
    paddingLeft: '1.5vw',
    maxWidth: 'unset',
    flex: '0 0 8.333333%',
},

shop_table:{
    width: '100%',
    paddingLeft: 0,
    float: 'none',
    clear: 'right',
    marginBottom: '18px !important',
    overflow: 'visible',
    display: 'block',
    lineHeight: '26px',
    color: '#808080',
    fontSize: '16px',
    overflowWrap: 'break-word',
    marginRight: '-5px',
    marginLeft: '-5px',
    flexWrap: 'wrap',
},

review_order:{
    width: '100%',
    marginBottom: '30px',
    boxSizing: 'border-box',
    textIndent: 'initial',
    borderSpacing: '2px',
    display: 'table',
    borderCollapse: 'collapse',
},

thead: {
    display: 'table-header-group',
    verticalAlign: 'middle',
    borderColor: 'inherit',
},

tbody :{
    display: 'table-row-group',
    verticalAlign: 'middle',
    borderColor: 'inherit',
},

tfoot:{
    display: 'table-footer-group',
    verticalAlign: 'middle',
    borderColor: 'inherit',
},

th:{
    border: 0,
    wordBreak: 'normal',
    fontWeight: 500,
    lineHeight: '26px',
    margin: 0,
    overflow: 'visible',
    padding: '8px',
    textAlign: 'inherit',
    display: 'table-cell',
    verticalAlign: 'inherit',
},

tr:{
    display: 'table-row',
    verticalAlign: 'inherit',
    borderColor: 'inherit',
    boxSizing: 'border-box',
},

tr_border:{
    borderTop: '1px solid grey'
},

td:{
    border: 0,
    lineHeight: '26px',
    margin: 0,
    overflow: 'visible',
    padding: '8px',
    boxSizing: 'border-box',
    display: 'table-cell',
    verticalAlign: 'inherit',
},

strong:{
    color: '#333',
    fontWeight: 'bolder',
},

bdi: {
    unicodeBidi: 'isolate',
},

payment_method:{
    margin: '2rem 0 3rem',
    paddingLeft: 0,
    listStyle: 'none',
    overflowWrap: 'breakWord',
    boxSizing: 'borderBox',
},

notice_info:{
    background: '#eee',
    borderTop: '2px solid',
    marginBottom: '30px',
    marginLeft: 0,
    padding: '20px 30px',
    listStyle: 'none',
    overflow: 'hidden',
    justifyContent: 'space-between',
    webkitBoxAlign: 'center',
    alignItems: 'center',
    boxSizing: 'inherit',
},

place_order:{
    display: 'block',
    flexWrap: 'wrap',
    marginRight: '-5px',
    marginLeft: '-5px',
    boxSizing: 'inherit',
},

privacy_policy_link:{
    color: '#E52727',
},

btn:{
    borderRadius: '50px !important',
    background: 'rgb(216,0,0) !important',
    marginTop: '30px !important',
    color: '#fff',
    fontSize: '16px',
},

ui_message_success:{
    color: 'green',
    marginLeft: 0,
    padding: '20px 30px',
    listStyle: 'none',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#eee',
    borderTop: '2px solid',
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    marginTop: '10px',
},

ui_message_unsuccess:{
    color: 'rgb(216, 0, 0)',
    marginLeft: 0,
    padding: '20px 30px',
    listStyle: 'none',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#eee',
    borderTop: '2px solid',
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    marginTop: '10px',
},

billing_required:{
    color: 'rgb(216, 0, 0)',
    fontSize: '12px'
},

});
export default useCheckout;