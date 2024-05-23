import React from "react";
import useBlog from "./Blogstyle";
import { Grid, Container, Paper, Box, Typography, Button } from "@mui/material";

export default function Blog() {
  const blog1 = [
    {
      bgimage:
        "https://themebing.com/wp/sayara/wp-content/uploads/2020/06/automotive-car-coupe-dashboard-498694-1280x720.jpg",
      date: "May 20, 2020",
      heading:
        "Electric cars aren’t pollution-free; they have to get their energy from somewhere",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo. Start working with Landrick that can provide everything.",
      button: "Read More",
    },
    {
      bgimage:
        "https://themebing.com/wp/sayara/wp-content/uploads/2020/05/parked-white-coupe-during-night-3354648-1280x650.jpg",
      date: "May 19, 2020",
      heading:
        "You can know or not know how a car runs and still enjoy riding in a car",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo. Start working with Landrick that can provide everything.",
      button: "Read More",
    },
    {
      bgimage:
        "https://themebing.com/wp/sayara/wp-content/uploads/2020/05/car-driving-fast-sports-car-18296-1280x650.jpg",
      date: "May 19, 2020",
      heading:
        "Race cars, no matter what size or shape they are, they do the same things. It is not complicated",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo. Start working with Landrick that can provide everything.",
      button: "Read More",
    },
  ];

  const blog2 = [
    {
      image:
        "https://themebing.com/wp/sayara/wp-content/uploads/2020/06/automotive-car-coupe-dashboard-498694-80x80.jpg",
      date: "May 20, 2020",
      paragraph: "Electric cars aren’t pollution-free; the",
    },
    {
      image:
        "https://themebing.com/wp/sayara/wp-content/uploads/2020/05/parked-white-coupe-during-night-3354648-1280x650.jpg",
      date: "May 19, 2020",
      paragraph: "You can know or not know how a car runs",
    },
    {
      image:
        "https://themebing.com/wp/sayara/wp-content/uploads/2020/05/car-driving-fast-sports-car-18296-1280x650.jpg",
      date: "May 19, 2020",
      paragraph: "Race cars, no matter what size or shape",
    },
  ];

  const blog3 = [
    "Body Parts (3)",
    "Engine & Drivetrain (3)",
    "Interior Parts (4)",
  ];

  const blog4 = [
    "Air Filters",
    "Brake Discs",
    "Bumpers",
    "Car Care",
    "Car Covers",
    "Cargo Accessories",
    "Consoles & Organizers",
    "Corner Lights",
    "Floor Mats",
    "Fog Lights",
    "Hoods",
    "Wheel Hubs",
  ];

  const classes = useBlog();
  return (
    <>
      <Container className={classes.conblog}>
        <Box sx={{ flexGrow: 1 }} className={classes.blog}>
          <Grid container spacing={2} className={classes.gridcon}>
            <Grid item xs={8}>
              {blog1.map((k) => {
                return (
                  <Paper className={classes.entryblogr}>
                    <div
                      className={classes.img1}
                      style={{
                        backgroundImage: `url(${k.bgimage})`,
                      }}
                    >
                      <span className={classes.excerptDate}>{k.date}</span>
                    </div>
                    <div className={classes.divmar}>
                      <Typography variant="h3" className={classes.entryhead}>
                        {k.heading}
                      </Typography>
                      <Typography variant="p" className={classes.entrypara}>
                        {k.paragraph}
                      </Typography>
                    </div>
                    <div className={classes.divmar}>
                      <Button variant="contained" className={classes.btn}>
                        {k.button}
                      </Button>
                    </div>
                  </Paper>
                );
              })}
            </Grid>

            <Grid item xs={4}>
              <div className={classes.marginblogl}>
                <Typography variant="h4" className={classes.righthead}>
                  Recent Posts
                </Typography>

                <ul>
                  {blog2.map((k) => {
                    return (
                      <li className={classes.li1}>
                        <div className={classes.pic1}>
                          <img
                            className={classes.imgright}
                            src={k.image}
                            alt=""
                          ></img>
                        </div>
                        <div className={classes.subps}>
                          <p className={classes.subp}>{k.paragraph}</p>
                          <span className={classes.subs}>{k.date}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={classes.marginblog2}>
                <img
                  className={classes.imgsub1}
                  src="https://themebing.com/wp/sayara/wp-content/uploads/2020/05/add-banner-red.jpg"
                  alt=""
                ></img>
              </div>

              <div className={classes.marginblog3}>
                <Typography variant="h4" className={classes.righthead}>
                  Categories
                </Typography>
                <ul>
                  {blog3.map((k) => {
                    return (
                      <li className={classes.li2}>
                        <p className={classes.subpara1}>{k}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={classes.marginblog3}>
                <Typography variant="h4" className={classes.righthead}>
                  Tags
                </Typography>
                <div>
                  {blog4.map((k) => {
                    return <p className={classes.commonpara}>{k}</p>;
                  })}
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
