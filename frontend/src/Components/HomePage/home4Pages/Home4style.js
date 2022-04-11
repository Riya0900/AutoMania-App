import { makeStyles } from "@mui/styles";

const useAdsstyle = makeStyles({
  main_section: {
    padding: "70px 0px 0px 0px",
  },

  section: {
    backgroundImage:
      "url(https://themebing.com/wp/sayara/wp-content/uploads/2020/06/automotive-car-coupe-dashboard-498694.jpg)",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition:
      "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
    marginTop: "0px",
    marginBottom: "0px",
    padding: "70px 0px 70px 0px",
    position: "relative",
  },

  background_overlay: {
    backgroundColor: "transparent",
    backgroundImage:
      "linear-gradient(90deg, #E52727 25%, rgba(0, 0, 0, 0.8) 70%)",
    opacity: 1,
    transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    position: "absolute",
  },

  container: {
    maxWidth: "1300px",
    display: "flex",
    marginRight: "auto",
    marginLeft: "auto",
    position: "relative",
    boxSizing: "border-box",
  },

  row: {
    width: "100%",
    display: "flex",
  },

  column: {
    width: "66.666%",
    position: "relative",
    display: "flex",
  },

  column_wrap: {
    width: "100%",
    position: "relative",
    display: "flex",
  },

  widget_wrap: {
    alignContent: "center",
    alignItems: "center",
    padding: "10px",
    width: "100%",
    position: "relative",
  },

  element: {
    marginBottom: "20px",
    position: "relative",
    transition:
      "background .3s,border .3s,border-radius .3s,box-shadow .3s,-webkit-box-shadow .3s",
  },

  heading_title: {
    color: "#FFFFFF",
    padding: 0,
    margin: 0,
    lineHeight: 1,
    fontSize: "2.5rem",
    wordWrap: "break-word",
  },

  heading_para: {
    color: "#FFFFFF",
    fontSize: "19px",
    fontWeight: 300,
    wordWrap: "break-word",
    padding: 0,
    margin: 0,
    lineHeight: 1,
  },

  column1: {
    width: "33.333%",
    position: "relative",
    display: "flex",
  },

  column_wrap1: {
    width: "100%",
    position: "relative",
    display: "flex",
  },

  widget_wrap1: {
    padding: "10px",
    width: "100%",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },

  element1: {
    right: "0px",
    width: "342px",
    maxWidth: "342px",
    bottom: "-95.031px",
    position: "absolute",
    zIndex: 1,
    textAlign: "center",
    transition:
      "background .3s,border .3s,border-radius .3s,box-shadow .3s,-webkit-box-shadow .3s",
  },

  image: {
    textAlign: "center",
  },

  attachment_full: {
    verticalAlign: "middle",
    display: "inline-block",
    maxWidth: "100%",
    border: "none",
    borderRadius: 0,
    boxShadow: "none",
    width: "476",
    height: "450",
  },
});

export default useAdsstyle;
