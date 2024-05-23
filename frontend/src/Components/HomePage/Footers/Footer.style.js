import { makeStyles } from "@mui/styles";

const useFooter = makeStyles({
  root: {
    background: "#212121",
    marginTop: "5%",
  },

  cols: {
    display: "flex",
    flexDirection: "row",
    alignItems: "left",
    marginLeft: 60,
    marginRight: 60,
  },

  col: {
    marginInline: "1%",
    marginTop: 100,
    alignItems: "left",
  },

  col1pic: {
    marginTop: "-55px",
    marginBottom: "-25px",
    maxWidth: "40%",
    marginLeft: "-200px",
    height: "auto",
  },

  col1para: {
    fontSize: "1.2vw",
    color: "#bbbbbb",
    textAlign: "left",
    marginBottom: "2%",
  },

  col1icon: {
    color: "white !important",
    fontSize: "2vw !important",
  },

  col2head: {
    fontSize: "1.5vw",
    fontFamily: "Montserrat , sansSerif",
    color: "white",
    marginBottom: "10%",
  },

  col2list: {
    fontSize: "1vw",
    fontFamily: "Montserrat , sansSerif",
    textDecoration: "none",
    marginTop: "5%",
    marginBottom: "2%",
    color: "#bbbbbb",
    "&:hover": {
      color: "rgb(216, 0, 0) !important",
    },
  },

  col3: {
    display: "flex",
    flexDirection: "row",
    alignItems: "left",
    marginBottom: 30,
    margin: 10,
  },

  col3p: {
    marginLeft: 20,
  },

  col3pic: {
    maxWidth: "25%",
  },

  col3date: {
    fontSize: "1vw",
    textAlign: "left",
    color: "#bbbbbb",
  },

  col4para: {
    fontSize: "1.1vw",
    fontFamily: "Montserrat , sansSerif",
    textAlign: "left",
    color: "#bbbbbb",
  },

  textfield: {
    background: "white",
    borderRadius: 50,
    marginTop: "5% !important",
    fontSize: "1vw !important",
    maxWidth: "90%",
    maxHeight: "auto",
  },

  btn: {
    background: "rgb(216, 0, 0) !important",
    borderRadius: "20px !important",
    fontFamily: "'Montserrat', sans-serif !important",
    textTransform: "none !important",
    marginTop: "10% !important",
    fontSize: "1vw !important",
  },
});

export default useFooter;
