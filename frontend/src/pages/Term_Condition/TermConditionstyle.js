import { makeStyles } from "@mui/styles";

const useTermCondition = makeStyles({
  container: {
    paddingRight: "15px",
    paddingLeft: "10%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "50px",
    marginBottom: "100px",
    position: "relative",
    boxSizing: "border-box",
    display: "block",
    width: "100%",
  },

  termcon: {
    color: "#7A7A7A",
    fontWeight: "var( --e-global-typography-text-font-weight )",
    textAlign: "left",
    padding: "10px",
    wordWrap: "break-word",
  },

  head: {
    fontWeight: "500 !important",
    fontStyle: "normal",
    color: "#333",
    boxSizing: "border-box",
    wordWrap: "break-word",
    fontSize: "28px !important",
    marginTop: "5px !important",
  },

  termul: {
    paddingLeft: "18px",
    boxSizing: "border-box",
    marginTop: 0,
    marginBottom: "1rem",
    overflowWrap: "break-word",
  },

  icon1: {
    fontSize: "12px !important",
  },
});

export default useTermCondition;
