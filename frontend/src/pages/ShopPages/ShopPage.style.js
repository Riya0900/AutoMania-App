import { makeStyles } from "@mui/styles";

const useShop = makeStyles({
  bg: {
    backgroundColor: "#fafafa",
  },

  cont: {
    paddingTop: "4%",
    marginLeft: "10%",
    maxWidth: "80%",
  },

  header: {
    backgroundColor: "white",
    border: "solid",
    borderWidth: 1,
    borderColor: "#eaeaea",
    borderRadius: 6,
    paddingTop: "0.45%",
    display: "flex",
    flexDirection: "row",
    paddingBottom: "0.6%",
  },

  headerpara: {
    textAlign: "left",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "1vw",
    color: "#808080",
    margin: "1.2%",
  },

  frm: {
    marginLeft: "57% !important",
    marginRight: "5% !important",
    justifyContent: "right !important",
    maxWidth: "35vh !important",
    background: "#fafafa",
  },

  body: {
    marginTop: "1% !important",
  },

  col1p: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "1.2vw",
    fontWeight: 500,
    textAlign: "left",
    color: "#333",
    margin: "7%",
  },

  hr1: {
    borderWidth: 0.1,
    borderColor: "#bababa",
    border: "solid",
    margin: "5%",
  },

  items: {
    display: "flex",
    flexDirection: "row",
    margin: "7%",
  },

  box: {
    width: "90%",
  },

  filter: {
    marginTop: "18%",
    marginLeft: "5%",
  },

  Slider: {
    color: "#E52727 !important",
    maxWidth: "90%",
    marginRight: "3%",
  },

  products: {
    display: "flex",
    flexFlow: "column wrap",
    maxWidth: "100%",
  },

  cat: {
    borderRadius: "12px !important",
    marginBottom: "7%",
    paddingBottom: "1%",
    background: "white",
    marginRight: "2.5%",
    maxWidth: "30.5%",
    boxShadow: "5px 5px 25px #eaeaea",
  },

  productpic: {
    height: "auto",
    maxWidth: "100%",
    borderRadius: "12px",
  },

  col1: {
    borderRadius: "0% !important",
    padding: "1% !important",
  },

  btn1: {
    background: "rgb(216, 0, 0) !important",
    borderRadius: "25px !important",
    fontFamily: "'Montserrat', sans-serif !important",
    textTransform: "none !important",
    marginLeft: "5% !important",
    fontSize: "1vw !important",
    display: "inline-block",
  },

  btn2: {
    background: "rgb(216, 0, 0) !important",
    borderRadius: "25px !important",
    fontFamily: "'Montserrat', sans-serif !important",
    textTransform: "none !important",
    maxWidth: "50% !important",
    fontSize: "1vw !important",
    marginBottom: "5% !important",
  },

  filterprice: {
    textAlign: "left",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "1vw",
    color: "#808080",
    marginLeft: "3%",
    display: "inline",
  },

  hr2: {
    borderWidth: 0.1,
    borderColor: "#eaeaea",
    border: "solid",
  },

  prices: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "1vw",
    fontWeight: 500,
    textAlign: "left",
    color: "#333",
    marginRight: "20%",
    display: "inline",
  },

  rate: {
    marginTop: "1%",
    marginBottom: "15%",
  },

  smallpic: {
    height: "25%",
    width: "25%",
    border: "1px solid #eaeaea",
    marginLeft: "7%",
  },

  pro: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "7%",
  },

  recent_proname: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "1vw",
    fontWeight: 500,
    color: "gray",
    marginRight: "1%",
    marginLeft: "5%",
    textAlign: "left",
  },

  ar: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "-30px",
  },

  productTags: {
    marginTop: "18%",
    marginLeft: "5%",
    marginBottom: "10%",
  },

  protag: {
    display: "flex",
    flexDirection: "row",
  },

  avgrate: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "1vw",
    fontWeight: 500,
    color: "#808080",
    marginRight: "30%",
    marginLeft: "7%",
    textAlign: "left",
  },

  tags: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "1vw",
    fontWeight: 500,
    color: "#808080",
    marginLeft: "2%",
    textAlign: "left",
    background: "#eaeaea",
    paddingInline: "3%",
    paddingTop: "3%",
    height: "auto",
    borderRadius: "3px",
    marginBottom: "2%",
    "&:hover": {
      background: "rgb(216, 0, 0) ",
      "& $tag": {
        color: "white !important",
        background: "rgb(216, 0, 0)",
      },
    },
  },

  tag: {
    fontFamily: "'Montserrat', sans-serif",
    textAlign: "left",
    background: "#eaeaea",
  },

  paginator: {
    justifyContent: "center",
    marginBottom: "10% !important",
  },

  like: {
    textAlign: "right",
  },
});

export default useShop;
