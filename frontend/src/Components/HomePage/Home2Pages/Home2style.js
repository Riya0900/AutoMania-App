import { makeStyles } from "@mui/styles";

const useHome2 = makeStyles({
  home: {
    height: "100%",
    padding: "70px",
    boxSizing: "border-box",
  },

  snb: {
    width: "100%",
    height: "100%",
    backgroundPosition: "right-bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    boxSizing: "border-box",
    zIndex: 1,
    borderRadius: "15px !important",
    overflow: "hidden",
    color: "#fff !important",
  },

  ab: {
    "&, &:after": {
      content: "",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      background:
        "linear-gradient(90deg, rgba(26, 26, 26, .98) 25%, rgba(26, 26, 26, 0) 90%)",
      zIndex: -1,
      boxizing: "border-box",
    },
  },

  head: {
    fontSize: 30,
    marginBottom: "50px !important",
    marginTop: "10px !important",
  },

  para: {
    fontSize: 16,
  },

  btn: {
    backgroundColor: "rgb(216, 0, 0) !important",
    borderRadius: "50px !important",
    cursor: "pointer !imporatant",
    marginBottom: "10px !important",
  },

  feb: {
    backgroundColor: "rgba(0, 0, 0, 0.07)",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    marginBottom: "50px !important",
  },

  febr: {
    marginTop: "15px",
    marginBottom: "15px",
  },

  featureicon: {
    width: "100% !important",
    fontSize: "50px !important",
    color: "rgb(216, 0, 0)",
  },

  head1: {
    marginLeft: "10px !important ",
    fontSize: 18,
  },

  para1: {
    marginLeft: "10px !important ",
    fontSize: 14,
    color: "#808080 ",
  },
});

export default useHome2;
