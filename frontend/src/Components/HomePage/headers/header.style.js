import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    width: "100%",
    fontSize: "20px",
    display: "flex",
    height: "85px",
    backgroundColor: "#eeeee4",
    alignItems: "center",
  },
  logocarimg: {
    width: "190px",
    marginLeft: "80px",
    zIndex: "10",
  },
  navsearch: {
    marginLeft: "90px",
    "& input": {
      width: "500px",
      height: "45px",
      border: "0.5px solid lightgrey",
      borderRadius: "40px",
      fontSize: "20px",
      paddingLeft: "20px",
    },
  },
  profilecheckout: {
    display: "flex",
  },

  profile: {
    marginLeft: "60px",
  },
  cart: {
    marginLeft: "60px",
  },

  navbar1: {
    fontSize: "20px",
    display: "flex",
    height: "85px",
    width: "100%",
    backgroundColor: "#eeeee4",
    justifyContent: "center",
  },
  itemlist: {
    "& li": {
      padding: "20px",
    },
    "& li:hover": {
      backgroundColor: "lightgrey",
    },
    "& a": {
      // marginRight: '20px',
      textDecoration: "none",
      color: "black",
    },
    "& a:hover": {
      color: "rgb(216, 0, 0)",
    },

    display: "flex",
    listStyle: "none",
  },
  itemlistli: {
    textDecoration: "none",
    marginRight: "15px",
  },

  "& pagelist:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    display: "block",
  },

  sublist_pages: {
    display: "none",
    position: "absolute",
    top: "3rem",
    backgroundColor: "white",
    color: "black",
    listStyleType: "none",
    marginLeft: "-1rem",
    boxShadow: "0 16px 24px 0 rgba(0, 0, 0, 0.16)",
    borderRadius: "0px 0px 5px 5px",
    border: "0.5px solid #d9d9d9",
    padding: "8px 0",
  },

  sublist_names: {
    padding: "0.5rem 3rem 0.5rem 1rem",
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  "& sublist_names:hover": {
    backgroundColor: "rgba(41, 125, 253, 0.08)",
    cursor: "pointer",
    display: "block",
  },
});

export default useStyles;
