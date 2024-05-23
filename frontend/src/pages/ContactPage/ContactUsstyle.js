import { makeStyles } from "@mui/styles";

const useContactUs = makeStyles({
  cont: {
    padding: 30,
  },

  textbox: {
    alignItems: "center",
    margine: 1,
  },

  text: {
    textAlign: "center",
    padding: 50,
  },

  para: {
    fontWeight: "normal",
    fontStyle: "normal",
    color: "#808080",
    fontSize: "16px",
  },

  head: {
    marginBottom: "30px !important",
  },

  fmap: {
    width: "100%",
    height: "60vh",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },

  name: {
    borderRadius: "50px !important",
    width: "50%",
    marginRight: "20px !important",
  },

  email: {
    width: "45%",
  },

  subject: {
    width: "100%",
    maxWidth: "100%",
    borderRadius: "50px !important",
  },

  message: {
    alignItems: "center",
    width: "100%",
    height: "100px !important",
    maxWidth: "100%",
    marginTop: "20px",
    borderRadius: "5px !important",
  },

  btn: {
    borderRadius: "50px !important",
    backgroundColor: "rgb(216, 0, 0) !important",
    marginTop: "20px !important",
  },
});

export default useContactUs;
