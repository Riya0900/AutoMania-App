import useFooter from './Footer.style';
import carlogo from '../headers/carlogo.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Box, IconButton } from '@mui/material';
import CpyRight from './CpyRight';
import { Link } from 'react-router-dom';

export default function Footer() {
  const classes = useFooter();
  return (
    <>
    <div className={classes.root}>
      <Box className={classes.cols} sx={{minWidth : '30%'}}>

        <Box className={classes.col}>
          <img src={carlogo} className={classes.col1pic} alt='carlogo'/>
          <p className={classes.col1para}>It is a long fact that a reader content a page when at its . The point of using Lorem Ipsum is that it has</p>
            <IconButton>
              <FacebookIcon className={classes.col1icon} />
            </IconButton>

            <IconButton>
              <TwitterIcon className={classes.col1icon} />
            </IconButton>

            <IconButton>
              <PinterestIcon className={classes.col1icon} />
            </IconButton>

            <IconButton>
              <LinkedInIcon className={classes.col1icon} />
            </IconButton>
        </Box>

        <Box className={classes.col} sx={{minWidth : '20%' , textAlign: 'left'}}>
          <p className={classes.col2head}>Customer Services</p>
          <p><Link to={'/contactus'} className={classes.col2list}>Contact Us</Link> </p>
          <p><Link to={'termcondition'} className={classes.col2list}>Terms and Conditions</Link></p>
          <p><Link to={'/aboutus'} className={classes.col2list}>About us</Link></p>
          <p><Link to={'/blog'} className={classes.col2list}>Blog</Link></p>
          <p><Link to={'/checkout'} className={classes.col2list}>Delivery Information</Link></p>
        </Box>

        <Box className={classes.col} sx={{minWidth : '30%'}}>
          <p className={classes.col2head}>Recent Posts</p>
          <Box className={classes.col3}>
            <img src='https://themebing.com/wp/sayara/wp-content/uploads/2020/06/automotive-car-coupe-dashboard-498694-100x100.jpg' className={classes.col3pic} alt='carlogo'/>
            <Box className={classes.col3p}>
              <p className={classes.col2list}>Electric cars aren't <br /> pollution-free ; the</p>
              <p className={classes.col3date}>February 20,2020</p>
            </Box>
          </Box>
          <Box className={classes.col3}>
            <img src='https://themebing.com/wp/sayara/wp-content/uploads/2020/05/parked-white-coupe-during-night-3354648-100x100.jpg' className={classes.col3pic} alt='carlogo'/>
            <Box className={classes.col3p}>
              <p className={classes.col2list}>You can know or not know <br /> how a car runs</p>
              <p className={classes.col3date}>February 19,2020</p>
            </Box>
          </Box>
        </Box>

        <Box className={classes.col} sx={{minWidth : '20%'}}>
          <p className={classes.col2head}>Newsletter</p>
          <p className={classes.col4para}>Subscribe to our Newsletter and get bonuses for the next purchase</p>
          <TextField fullWidth placeholder="Your Email Address" className={classes.textfield} />
          <Button variant="contained" className={classes.btn}>Sign Up</Button>
        </Box>
      </Box>
    </div>
    <CpyRight/>
    </>
  );
}
