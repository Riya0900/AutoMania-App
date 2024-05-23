import React from "react";
import {
  Grid,
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";
import useContactUs from "./ContactUsstyle";

function ContactUs() {
  const classes = useContactUs();
  return (
    <>
      <div className={classes.cont}>
        <div className={classes.text}>
          <Typography variant="h4" className={classes.head}>
            Leave us a Message
          </Typography>
          <Typography variant="p" className={classes.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec mattis, pulvinar dapibus leo. Start working with
            Landrick that can provide everything
          </Typography>
        </div>
        <div className={classes.conheight}>
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={6}>
                <Paper>
                  <Box>
                    <iframe
                      title="iframe-map"
                      className={classes.fmap}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5630517715354!2d72.50541481428353!3d23.076475620103647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9cb822589293%3A0xf0d461fa72c1c793!2sScience%20City%20Rd%2C%20Sola%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1622008961084!5m2!1sen!2sin"
                    ></iframe>
                  </Box>
                </Paper>
              </Grid>

              <Grid item lg={6}>
                <Paper>
                  <Box p={5} className={classes.textbox}>
                    <TextField
                      className={classes.name}
                      helperText=" "
                      id="demo-helper-text-aligned-no-helper"
                      placeholder="Full name"
                      variant="outlined"
                    />
                    <TextField
                      className={classes.email}
                      helperText=" "
                      id="demo-helper-text-aligned-no-helper"
                      placeholder="Email"
                      variant="outlined"
                    />

                    <Box>
                      <TextField
                        className={classes.subject}
                        fullWidth
                        id="fullWidth"
                        placeholder="Subject"
                        variant="outlined"
                      />
                    </Box>

                    <TextareaAutosize
                      className={classes.message}
                      maxRows={4}
                      aria-label="maximum height"
                      placeholder="Message"
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.btn}
                    >
                      Submit
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
