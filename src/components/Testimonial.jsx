import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import {
    Box,
    
   
  } from "@material-ui/core";

const videoData = [
    {
      id: 1,
      url: "https://assets.mixkit.co/videos/preview/mixkit-little-girl-eating-easter-egg-chocolate-in-the-garden-48603-large.mp4",
    },
    {
      id: 2,
      url: "https://assets.mixkit.co/videos/preview/mixkit-little-girl-with-bunny-tiara-in-the-garden-48601-large.mp4",
    },
    {
      id: 3,
      url: "https://assets.mixkit.co/videos/preview/mixkit-little-girl-laying-in-the-grass-enjoying-a-chocolate-bunny-49069-large.mp4",
    },
    {
      id: 4,
      url: "https://assets.mixkit.co/videos/preview/mixkit-little-girl-in-nature-with-a-marshmallow-on-a-twig-39766-large.mp4",
    },
    {
      id: 5,
      url: "https://assets.mixkit.co/videos/preview/mixkit-excited-girl-with-a-stuffed-santa-claus-39747-large.mp4",
    },
    {
      id: 6,
      url: "https://assets.mixkit.co/videos/preview/mixkit-father-and-daughter-sitting-on-the-floor-at-christmas-39753-large.mp4",
    },
  ];
  
  const imageData = [
    {
      id: 1,
      url: "https://user-images.githubusercontent.com/99132893/232675632-cb398efb-c32c-4d63-ae07-caaf8ce3aeb5.jpg",
    },
    {
      id: 2,
      url: "https://user-images.githubusercontent.com/99132893/232675632-cb398efb-c32c-4d63-ae07-caaf8ce3aeb5.jpg",
    },
    {
      id: 3,
      url: "https://user-images.githubusercontent.com/99132893/232675632-cb398efb-c32c-4d63-ae07-caaf8ce3aeb5.jpg",
    },
    {
      id: 4,
      url: "https://user-images.githubusercontent.com/99132893/232675632-cb398efb-c32c-4d63-ae07-caaf8ce3aeb5.jpg",
    },
  ];
  

  const useStyles = makeStyles((theme) => ({
    heading: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: theme.spacing(3),
      marginTop:'20px',
    },
  carouselContainer: {
    top:'-20px',
    backgroundColor:'#FFEFE3',
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      height: '100%',
    },
  },
  carouselTextContainer: {
    top: '50%',
    left: '50%',
    textAlign: 'center',
  },
  carouselTitle: {
    
    color: 'black',
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
  videoContainer: {
    width: '20%',
   
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    objectFit:'cover',
    left:"40%",
    [theme.breakpoints.down('sm')]: {
        width:'50%',
        left:"25%",
      },
   
    
    

    

  },
  videoPlayer: {
    width: '100%',
    height: '100%',
    borderRadius:'20px'
  },
  playPauseButton: {
    position: 'absolute',
    top:"50%",
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80px',
    height: '80px',
    background: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    zIndex: 2,
    transition: 'opacity 0.3s',
    '&:hover': {
      opacity: 0.8,
    },
  },
  playPauseIcon: {
    width: '50px',
    height: '50px',
    fill: '#fff',
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom:'30px',
    marginTop: theme.spacing(2),
  },
  navigationButton: {
    margin: theme.spacing(0, 1),
  },
  imageCarouselContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  singleImageContainer: {
    width: '100%',
    height: '300px',
    marginRight: theme.spacing(2),
    borderRadius: '10px',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '150px',
    },
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
        marginLeft:'15px'
      },
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    
  },
}));

const VideoCarousel = () => {
  const classes = useStyles();
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isPlaying, setPlaying] = React.useState(false);

  const handlePlayPause = () => {
    setPlaying(!isPlaying);
  };

  const handlePreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoData.length - 1 : prevIndex - 1
    );
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      
      <div className={classes.carouselContainer}>
      <Box className={classes.heading}>
        <img
          className={classes.starIcon}
          src="https://user-images.githubusercontent.com/99132893/232488929-b1d3abc9-f299-4e1a-a6fa-689bce962175.png"
          alt="star"
        />
        <Typography variant="h4" className={classes.subHeading}>
         User Testimonials
        </Typography>
        <img
          className={classes.starIcon}
          src="https://user-images.githubusercontent.com/99132893/232488929-b1d3abc9-f299-4e1a-a6fa-689bce962175.png"
          alt="star"
        />
      </Box>
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          transitionTime={500}
          stopOnHover={false}
          selectedItem={currentVideoIndex}
          onChange={(index) => setCurrentVideoIndex(index)}
        >
          {videoData.map((video) => (
            <div className={classes.videoContainer} key={video.id}>
              <video
                src={video.url}
                className={classes.videoPlayer}
                autoPlay={isPlaying}
                loop
                muted
              />
              {!isPlaying && (
                <div
                  className={classes.playPauseButton}
                  onClick={handlePlayPause}
                >
                  <svg
                    className={classes.playPauseIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </Carousel>
        <div className={classes.navigationContainer}>
        <Button
          className={classes.navigationButton}
          variant="contained"
          color="primary"
          onClick={handlePreviousVideo}
        >
          Previous
        </Button>
        <Button
          className={classes.navigationButton}
          variant="contained"
          color="primary"
          onClick={handleNextVideo}
        >
          Next
        </Button>
      </div>

      <div className={classes.imageCarouselContainer}>
        <div className={classes.singleImageContainer}>
          <motion.div
            className={classes.imageContainer}
            key={imageData[currentImageIndex].id}
            whileHover={{ scale: 1.1 }}
          >
            <img
              className={classes.image}
              src={imageData[currentImageIndex].url}
              alt="carousel"
            />
          </motion.div>
        </div>
      </div>

      <div className={classes.navigationContainer}>
        <Button
          className={classes.navigationButton}
          variant="contained"
          color="primary"
          onClick={handlePreviousImage}
        >
          Previous
        </Button>
        <Button
          className={classes.navigationButton}
          variant="contained"
          color="primary"
          onClick={handleNextImage}
        >
          Next
        </Button>
      </div>
      </div>

      
    </div>
  );
};

export default VideoCarousel;
