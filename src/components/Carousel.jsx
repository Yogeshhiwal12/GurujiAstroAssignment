import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid } from '@material-ui/core';
import { motion } from 'framer-motion';
import image from '../Assets/ag.jpg'

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    position: 'relative',
    width: '100%',
    height: '500px',
    overflow: 'hidden',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      height: '400px',
    },
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  carouselTextContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  carouselTitle: {
    color: '#fff',
    fontSize: '24px',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      marginBottom: theme.spacing(1),
    },
  },
  carouselSubtitle: {
    color: '#fff',
    fontSize: '16px',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      marginBottom: theme.spacing(2),
    },
  },
  buttonContainer: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position:"absolute",
   top:'450px',
   left:"200px",
   [theme.breakpoints.down('sm')]: {
    left:'0px',
    justifyContent: 'center',
    top:'330px',

    
  },

   
  },
  flexItem: {
    width: 'calc(20% - 10px)',
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexWrap:'wrap'
    },
  },
  flexImage: {
    width: '40px',
    height: '40px',
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width: '30px',
      height: '30px',
      marginRight: theme.spacing(0.5),
    },
  },
  flexText: {
    fontSize: '14px',
    color:'#fff',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
}));

const Carousel = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.carouselContainer}>
        <motion.img
          src={image}
          alt="Carousel Image 1"
          className={classes.carouselImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <div className={classes.carouselTextContainer}>
          <Typography variant="h1" className={classes.carouselTitle}>
            Astrology for Clarity
          </Typography>
          <Typography variant="h4" className={classes.carouselSubtitle}>
            Your name is a Vedic Astrologer and has expertise in Vaastu and Mantra Therapy
          </Typography>
          <div className={classes.buttonContainer}>
            <Button variant="contained" color="primary">
              Consult Now
            </Button>
          </div>
        </div>
      </div>

      <div className={classes.flexContainer}>
        <div className={classes.flexItem}>
          <img src="https://user-images.githubusercontent.com/99132893/232845278-39876f4c-e0dc-4a2c-a893-8f5a9135d9bd.png" alt="Feature 1" className={classes.flexImage} />
          <Typography variant="subtitle1" className={classes.flexText}>
            24*7 Customer Support
          </Typography>
        </div>
        <div className={classes.flexItem}>
          <img src="https://user-images.githubusercontent.com/99132893/232846080-fd5c7bee-8421-4e1e-beb9-10a0df569600.png" alt="Feature 2" className={classes.flexImage} />
          <Typography variant="subtitle1" className={classes.flexText}>
            100% Refund if Unsatisfied
          </Typography>
        </div>
        <div className={classes.flexItem}>
          <img src="https://user-images.githubusercontent.com/99132893/232846584-39cd7085-180a-4ddd-8fc0-eba2a4ab918f.png" alt="Feature 3" className={classes.flexImage} />
          <Typography variant="subtitle1" className={classes.flexText}>
            Private & Confidential
          </Typography>
        </div>
        <div className={classes.flexItem}>
          <img src="https://user-images.githubusercontent.com/99132893/232265600-5a03d185-1c89-4dd4-9d02-491565d80add.png" alt="Feature 4" className={classes.flexImage} />
          <Typography variant="subtitle1" className={classes.flexText}>
            Verified Astrologer
          </Typography>
        </div>
        <div className={classes.flexItem}>
          <img src="https://user-images.githubusercontent.com/99132893/232265922-d99b86ce-4eb8-4277-9ea3-4de68c7783ae.png" alt="Feature 5" className={classes.flexImage} />
          <Typography variant="subtitle1" className={classes.flexText}>
            Secure Payment
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
