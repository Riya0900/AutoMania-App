import Button from "@mui/material/Button";
import useStyles from "./Home3.style";
import { Box } from "@mui/material";

export default function Home3() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Box sx={{ display: "flex" }}>
        <Box className={classes.root}>Shop by category</Box>
        <Button variant="contained" className={classes.btn}>
          Shop Now
        </Button>
      </Box>

      <div className={classes.cat}>
        <div className={classes.row}>
          <div className={classes.catdata}>
            <img
              src="https://themebing.com/wp/sayara/wp-content/uploads/2020/05/cat-1.jpg"
              alt="Body Parts"
              className={classes.catpic}
            />
            <div className={classes.catname}>
              <p>Body Parts</p>
            </div>
          </div>

          <div className={classes.catdata}>
            <img
              src="https://themebing.com/wp/sayara/wp-content/uploads/2020/05/cat-2.jpg"
              alt="Headlights & Lighting "
              className={classes.catpic}
            />
            <div className={classes.catname}>
              <p>Headlights & Lighting</p>
            </div>
          </div>

          <div className={classes.catdata}>
            <img
              src="https://themebing.com/wp/sayara/wp-content/uploads/2020/05/cat-4.jpg"
              alt="Brakes & Suspension"
              className={classes.catpic}
            />
            <div className={classes.catname}>
              <p>Brakes & Suspension</p>
            </div>
          </div>

          <div className={classes.catdata}>
            <img
              src="https://themebing.com/wp/sayara/wp-content/uploads/2020/05/cat-6.jpg"
              alt="Engine & Drivetrain"
              className={classes.catpic}
            />
            <div className={classes.catname}>
              <p>Engine & Drivetrain</p>
            </div>
          </div>
        </div>

        <div className={classes.row}>
          <div className={classes.catdata}>
            <img
              src="https://themebing.com/wp/sayara/wp-content/uploads/2020/05/cat-3.jpg"
              alt="Tools & Garage"
              className={classes.catpic}
            />
            <div className={classes.catname}>
              <p>Tools & Garage</p>
            </div>
          </div>

          <div className={classes.catdata}>
            <img
              src="https://themebing.com/wp/sayara/wp-content/uploads/2020/05/cat-5.jpg"
              alt="Interior Parts "
              className={classes.catpic}
            />
            <div className={classes.catname}>
              <p>Interior Parts</p>
            </div>
          </div>

          <div className={classes.catdata}>
            <img
              src="https://themebing.com/wp/sayara/wp-content/uploads/2020/05/cat-1.jpg"
              alt="Body Parts"
              className={classes.catpic}
            />
            <div className={classes.catname}>
              <p>Body Parts</p>
            </div>
          </div>

          <div className={classes.catdata}>
            <img
              src="https://themebing.com/wp/sayara/wp-content/uploads/2020/05/cat-4.jpg"
              alt="Brakes & Suspension"
              className={classes.catpic}
            />
            <div className={classes.catname}>
              <p>Brakes & Suspension</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
