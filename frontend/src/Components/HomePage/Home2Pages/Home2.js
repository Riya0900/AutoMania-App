import React from "react";
import useHome2 from "./Home2style";


import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import {
  Container,
  Paper,
  Typography,
  Button,
  Grid,
  Box
} from '@mui/material';

export default function Home2() {
  const classes = useHome2();
  return (
    <>
      <Container  className={classes.home}>

        <Grid container spacing={3} >
          <Grid item lg={4} >
            <Paper className={classes.snb}

              style={{
                backgroundImage: "url(https://themebing.com/wp/sayara/wp-content/uploads/2020/05/black-mercedes-benz-sports-car-interior-1104768.jpg)"
              }}
            >
              <Box p={3} className={classes.ab}>
                <Typography variant="p" className={classes.para}>
                  Low Prices guarantee
                </Typography>
                <Typography variant="h4" className={classes.head}>
                  Interior Parts
                </Typography>

              <Button variant="contained" className={classes.btn}>
                  Shop Now
                </Button>
                </Box>
            </Paper>
          </Grid>

          <Grid item lg={4} >
            <Paper className={classes.snb}

              style={{
                backgroundImage:'url(https://themebing.com/wp/sayara/wp-content/uploads/2020/05/car-driving-fast-sports-car-18296.jpg)'
              }}
            >
              <Box p={3} className={classes.ab}>
                <Typography variant="p" className={classes.para}>
                  Power tools of next level
                </Typography>
                <Typography variant="h4" className={classes.head}>
                  Wheels Rim
                </Typography>


              <Button  className={classes.btn} variant="contained" >
                  Shop Now
                </Button>
                </Box>
            </Paper>
          </Grid>

          <Grid item lg={4} >
            <Paper className={classes.snb}

              style={{
                backgroundImage: "url(https://themebing.com/wp/sayara/wp-content/uploads/2020/05/black-and-white-round-car-air-filter-159293.jpg)"
              }}
            >
              <Box p={3} className={classes.ab}>
                <Typography variant="p" className={classes.para}>
                  For Any Vehicle
                </Typography>
                <Typography variant="h4" className={classes.head}>
                  Body Parts
                </Typography>

              <Button variant="contained" className={classes.btn} >
                  Shop Now
                </Button>
                </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* grid 2 */}

      <Container>
        <Grid container className={classes.feb}>
          <Grid item lg={3} className={classes.febr}>
            <Box p={3}>
              <Grid container>
                <Grid item>
                  {" "}
                  <AirportShuttleIcon className={classes.featureicon} />
                </Grid>
                <Grid>
                  <Typography variant="h6" className={classes.head1}>
                    Free Shipping
                  </Typography>
                  <Typography variant="p" className={classes.para1}>
                    For orders from $50
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item lg={3} className={classes.febr}>
            <Box p={3}>
              <Grid container>
                <Grid>
                  {" "}
                  <SupportAgentIcon className={classes.featureicon} />
                </Grid>
                <Grid>
                  {" "}
                  <Typography variant="h6" className={classes.head1}>
                    Support 24/7
                  </Typography>
                  <Typography variant="p" className={classes.para1}>
                    Call us anytime
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item lg={3} className={classes.febr}>
            <Box p={3}>
              <Grid container>
                <Grid>
                  {" "}
                  <VpnLockIcon className={classes.featureicon} />
                </Grid>
                <Grid>
                  <Typography variant="h6" className={classes.head1}>
                    100% Safety
                  </Typography>
                  <Typography variant="p" className={classes.para1}>
                    Only secure payments
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item lg={3} className={classes.febr}>
            <Box p={3}>
              <Grid container>
                <Grid>
                  {" "}
                  <LocalOfferIcon className={classes.featureicon} />
                </Grid>
                <Grid>
                  <Typography variant="h6" className={classes.head1}>
                    Hot Offers
                  </Typography>
                  <Typography variant="p" className={classes.para1}>
                    Discounts up to 90%
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
