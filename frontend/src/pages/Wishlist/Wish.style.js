import {makeStyles} from '@mui/styles';

const useWish = makeStyles({

wish_container:{
  margin: '7%',
  textAlign: 'left',
},

wish_header: {
  fontSize : '2vw',
  color : '#333',
  textAlign: 'left',
  fontFamily: "'Montserrat', sans-serif" ,
  marginBottom : '2%',
},

wish_footer: {
  fontSize : '1.5vw',
  color : '#333',
  textAlign: 'left',
  fontFamily: "'Montserrat', sans-serif" ,
  marginTop : '2%',
},

table_container:{
  width: '100%',
  height: '100%'
},

main_table:{
  width: '100%',
  height: '100%',
  borderCollapse: 'collapse',

"& th,td":{
  border: '1px solid lightgrey',
},

},

head_th:{
  fontSize: '1.5vw',
  lineHeight: '7vh',
  color: '#808080',
  fontFamily: "'Montserrat', sans-serif" ,
  paddingLeft: '2%',
},

tr_tag : {
  lineHeight : '1vh',
},

td_style:{
  paddingLeft: '2%',
},

img_style: {
  maxWidth: '80%',
},

thumbnail_img :{
  minWidth: '100px',
},

atag: {
  cursor: 'pointer',
},

td_style_price:{
  color: '#808080',
  paddingLeft: '2%',
  fontFamily: "'Montserrat', sans-serif" ,
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

empty_wish:{
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

td_name : {
  textAlign : 'left',
  color: 'rgb(216,0,0)',
  fontFamily: "'Montserrat', sans-serif" ,
},

wish_footer_wp : {
  background: '#00A901',
  color: 'white',
  padding : '5px',
  fontSize: '2vw !important',
},

wish_footer_fb : {
  background: 'rgb(0, 0, 100)',
  color: 'white',
  padding : '5px',
  fontSize: '2vw !important',
},

wish_footer_pin : {
  background: 'rgb(216,0,0)',
  color: 'white',
  padding : '5px',
  fontSize: '2vw !important',
},

wish_footer_tw : {
  background: 'rgb(0, 202, 212)',
  color: 'white',
  padding : '5px',
  fontSize: '2vw !important',
},

wish_footer_mail : {
  background: 'rgb(255, 234, 0)',
  color: 'white',
  padding : '5px',
  fontSize: '2vw !important',
},

})

export default useWish;