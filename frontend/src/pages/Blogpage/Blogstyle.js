import { makeStyles } from "@mui/styles";

const useBlog = makeStyles({
  conblog: {
    backgroundColor: "#fafafa",
    width: "100% !important",
    flexWrap: "wrap",
    justifyContent: "center !important",
  },

  blog: {
    marginTop: "20px",
    dispaly: "block",
    width: "100% !important",
  },

  gridcon: {
    display: "flex !important",
  },

  entryblogr: {
    marginBottom: "40px",
  },

  img1: {
    width: "100%",
    height: "350px",
    boxSizing: "border-box",
    backgroundSize: "cover",
    position: "relative",
    marginBottom: "20px",
  },

  excerptDate: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    color: "#fff",
    fontSize: "14px",
    borderRadius: "30px",
    padding: "10px 30px",
    background: "linear-gradient(to right, #E52727, #E52727)",
    boxSizing: "border-box",
  },

  divmar: {
    marginLeft: "30px !important",
    textAlign: "left !important",
  },

  entryhead: {
    fontSize: "28px !important",
    color: "#333",
    marginBottom: "20px !important",
  },

  entrypara: {
    lineHeight: "26px",
    fontWeight: "normal",
    color: "#808080 !important",
    fontSize: "16px",
    marginBottom: "20px !important",
  },

  btn: {
    marginTop: "20px !important",
    backgroundColor: "rgb(216, 0, 0) !important",
    borderRadius: "50px !important",
    marginBottom: "30px !important",
    background: "linear-gradient(to right, #E52727, #E52727)",
  },

  marginblogl: {
    background: "#fff",
    margin: "0 0 1.5em",
    padding: "30px 20px",
    marginBottom: "50px",
    borderRadius: "6px",
    overflow: "hidden",
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
  },

  righthead: {
    color: "#333",
    fontWeight: "500 !important",
    position: "relative",
    borderBottom: "2px solid #efefef",
    marginBottom: "15px !important",
    paddingBottom: "15px",
    wordWrap: "break-word",
    textAlign: "left",
    fontSize: "1.5rem",
  },

  ul: {
    overflowWrap: "break-word",
    boxSizing: "border-box",
    display: "block",
    listStyle: "none",
  },

  li1: {
    display: "flex !important",
    padding: "15px 0 !important",
    boxSizing: "border-box",
  },

  imgright: {
    width: "80px",
    height: "80px",
    display: "block",
  },

  pic1: {
    width: "30%",
  },

  subps: {
    position: "relative",
    width: "70%",
    marginLeft: "15px",
    overflowWrap: "break-word",
    textAlign: "left",
    display: "block",
  },

  subp: {
    lineHeight: "26px",
    fontWeight: "normal",
    fontStyle: "normal",
    color: "#808080",
    fontSize: "16px",
  },

  subs: {
    left: 0,
    fontSize: "13px",
    lineHeight: 0,
    color: "#ccc",
    textAlign: "left",
    boxSizing: "border-box",
  },

  imgsub1: {
    width: 230,
    height: 351,
    color: "#333",
    fontWeight: "500 !important",
    position: "relative",
    borderBottom: "2px solid #efefef",
    marginBottom: "15px !important",
    paddingBottom: "15px",
  },

  marginblog2: {
    background: "#fff",
    margin: "0 0 1.5em",
    padding: "30px 20px",
    marginBottom: "50px",
    borderRadius: "6px",
    overflow: "hidden",
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
  },

  marginblog3: {
    background: "#fff",
    margin: "0 0 1.5em",
    padding: "30px 20px",
    marginBottom: "50px",
    borderRadius: "6px",
    overflow: "hidden",
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
  },

  li2: {
    "&, &:before": {
      content: "\f111",
      fontWeight: 900,
      top: 0,
      fontSize: "12px",
      color: "#ccc",
      marginLeft: "20px",
    },
  },

  subpara1: {
    position: "relative",
    display: "block",
    marginTop: "10px",
    marginBottom: "10px",
    textAlign: "left",
    color: "#808080",
    wordWrap: "break-word",
  },

  commonpara: {
    "&:hover": {
      backgroundColor: "rgb(216, 0, 0)",
      color: "white",
    },
    color: "#808080",
    border: "1px solid #efefef",
    fontSize: "15px !important",
    padding: "5px 12px",
    borderRadius: "3px",
    display: "inline-block",
    transition: "0.3s",
    marginTop: "6px",
    background: "#efefef",
    boxSizing: "border-box",
    marginRight: "5px",
  },
});

export default useBlog;
