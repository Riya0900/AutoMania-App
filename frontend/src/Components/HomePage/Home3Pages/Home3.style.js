import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  main : {
    marginTop: '7%',
    paddingLeft: '10%',
    paddingRight: '5%'
  },
  
  root: {
    fontSize: 30 ,
    fontFamily: 'Montserrat , sansserif' ,
    width: '80%' ,
    textAlign : 'left'
  },

  btn: {
    background: "rgb(216, 0, 0) !important" , 
    borderRadius: "20px !important" , 
    fontFamily: "'Montserrat', sans-serif !important" , 
    textTransform: 'none !important', 
    width: '20vh !important',
    fontSize: '20px !important',
  },

  cat: {
    marginTop: '5%' ,
  },

  row: {
    display: 'flex' ,
    flexDirection: 'row' ,
    alignItems : 'left' ,
    marginRight: '1%',
    paddingBottom : '1%',
  },

  catdata: {
    borderRadius: 20 ,
    maxWidth: '35%' ,
    background: 'white',
    borderColor : 'rgb(207, 207, 207)',
    borderWidth : 2 ,
    border: 'solid' ,
    marginLeft: '2%' ,
    marginBottom : '2%',
    "&:hover": {
        border : 'solid' ,
        borderWidth : 2 , 
        borderColor : 'rgb(216, 0, 0)', 
        "& $catname":{
          background: 'rgb(216, 0, 0)',
        }
    }
  },  

  catpic: {
    height: '45%' ,
    width : '60%',
    marginTop: '30%' ,
    marginLeft: '20%',
    marginBottom: '20%' ,
  },

  catname: {
    fontSize: 20 ,
    fontFamily: 'Montserrat , sansSerif' ,
    fontWeight: 700 ,
    background : 'rgb(224, 224, 224)' ,
    textAlign: 'center' ,
    padding: '7%' ,
    borderBottomLeftRadius: 20 ,
    borderBottomRightRadius: 20 ,
  },

});

export default useStyles;