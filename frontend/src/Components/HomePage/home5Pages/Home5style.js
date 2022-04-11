import { makeStyles } from "@mui/styles";

const useArticaleblog = makeStyles({
  section: {
    backgroundColor: "#FAFAFA",
    transition:
      "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
    padding: "80px 0px 50px 0px",
    position: "relative",
    boxSizing: "border-box",
  },

  widget_wrap: {
    padding: "10px",
    display: "flex",
    position: "relative",
    width: "100%",
    flexWrap: "wrap",
    alignContent: "flex-start",
    boxSizing: "border-box",
    marginRight: "auto",
    marginLeft: "auto",
  },

  section1: {
    padding: "0px 0px 30px 0px",
    width: "100%",
    position: "relative",
    display: "block",
  },

  row1: {
    width: "100%",
    display: "flex",
    boxSizing: "border-box",
    marginRight: "auto",
    marginLeft: "auto",
    position: "relative",
  },

  column1: {
    position: "relative",
    display: "flex",
    boxSizing: "border-box",
    width: "50%",
  },

  widget_wrap1: {
    alignContent: "center",
    alignItems: "center",
    padding: "10px",
    display: "flex",
    position: "relative",
    width: "100%",
    flexWrap: "wrap",
    boxSizing: "border-box",
  },

  element1: {
    width: "100%",
    position: "relative",
    boxSizing: "border-box",
    textAlign: "left",
    transition:
      "background .3s,border .3s,border-radius .3s,box-shadow .3s,-webkit-box-shadow .3s",
  },

  heading_title: {
    color: "#333333",
    fontSize: "32px",
    fontWeight: 500,
    padding: 0,
    margin: 0,
    lineHeight: 1,
    boxSizing: "border-box",
  },

  element2: {
    width: "100%",
    textAlign: "right",
    position: "relative",
    boxSizing: "border-box",
    transition:
      "background .3s,border .3s,border-radius .3s,box-shadow .3s,-webkit-box-shadow .3s",
  },

  sayara_btn: {
    boxShadow: "none",
    textDecoration: "none",
    background: "linear-gradient(to right, #E52727, #E52727)",
    display: "inline-block",
    padding: "12px 50px",
    color: "#fff",
    borderRadius: "50px",
    cursor: "pointer",
    touchAction: "manipulation",
    transition: "all 0.3s ease 0s",
    verticalAlign: "middle",
  },

  section2: {
    width: "100%",
    position: "relative",
    boxSizing: "border-box",
    display: "block",
  },

  row2: {
    width: "100%",
    display: "flex",
    boxSizing: "border-box",
    marginRight: "auto",
    marginLeft: "auto",
    flexWrap: "wrap",
  },

  column3: {
    padding: 0,
    width: "100%",
    position: "relative",
    display: "flex",
  },

  widget_wrap3: {
    padding: "10px",
    display: "flex",
    position: "relative",
    width: "100%",
    flexWrap: "wrap",
    alignContent: "flex-start",
    boxSizing: "border-box",
  },

  element3: {
    width: "100%",
    position: "relative",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    boxSizing: "border-box",
    transition:
      "background .3s,border .3s,border-radius .3s,box-shadow .3s,-webkit-box-shadow .3s",
  },

  row: {
    boxSizing: "border-box",
    justifyContent: "center!important",
    flexWrap: "wrap",
    marginRight: "-15px",
    marginLeft: "-15px",
    display: "flex",
  },

  col_xl_4: {
    flex: "0 0 33.333333%",
    maxWidth: "33.333%",
    boxSizing: "border-box",
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
  },

  blog_item: {
    background: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "30px",
    border: "1px solid #ddd",
  },

  blog_thumb: {
    overflow: "hidden",
    position: "relative",
    boxSizing: "border-box",
  },

  blog_meta: {
    textAlign: "left",
  },

  attachment_sayara: {
    width: " 100%",
    height: " 262px",
    maxWidth: "100%",
    boxShadow: "none",
  },

  date: {
    background: "linear-gradient(to right, #E52727, #E52727)",
    padding: "5px 10px",
    fontSize: "12px",
    position: "absolute",
    bottom: "15px",
    left: "15px",
    color: "#fff",
    borderRadius: "20px",
    boxSizing: "border-box",
  },

  blog_content: {
    padding: "45px 35px",
    boxSizing: "border-box",
  },

  image2: {
    width: "40px",
    borderRadius: "50% !important",
    verticalAlign: "middle",
    boxSizing: "border-box",
  },

  pr_10: {
    color: "#E52727",
    textTransform: "capitalize",
    fontSize: "14px",
    fontWeight: "500",
    paddingRight: "10px",
    boxSizing: "border-box",
  },

  pl_11: {
    color: "#333",
    textTransform: "capitalize",
    fontSize: "14px",
    fontWeight: "500",
    paddingLeft: "10px",
    boxSizing: "border-box",
  },

  bottom_heading: {
    fontWeight: 500,
    textAlign: "left",
    fontSize: "20px",
    marginTop: "15px",
    lineHeight: "32px",
    marginBottom: 0,
    color: "#333",
    wordWrap: "break-word",
    textTransform: "capitalize",
    boxSizing: "border-box",
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 2,
  },
});

export default useArticaleblog;
