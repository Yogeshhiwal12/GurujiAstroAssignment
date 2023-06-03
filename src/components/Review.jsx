import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Avatar, IconButton } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  reviewContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'#F2D2BA'
  },
  heading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    marginTop:'50px'
  },
  title: {
    margin: theme.spacing(2),
  },
  reviewCard: {
    width:'80%',
    height:'200px',
    
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    borderRadius: '5px',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center align the star icons horizontally
    marginBottom: theme.spacing(2),
  },
  starIcon: {
    color: '#984100',

  },
  reviewText: {
    marginBottom: theme.spacing(2),
    fontSize:'1.5rem'
  },
  userContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  userAvatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    margin: theme.spacing(1),
    cursor: 'pointer',
    border: '2px solid transparent',
  },
  selectedUserAvatar: {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  userName: {
    fontWeight: 'bold',
  },
}));

const reviews = [
  {
    rating: 4,
    review: 'Explore the Mysteries of the Universe with Our Expert Astrology Services',
    userName: 'Harsh Patel',
    userImage: 'https://user-images.githubusercontent.com/99132893/233252738-4cd1e57a-6bb6-4c92-a313-e13abc62d816.jpeg',
  },
  {
    rating: 5,
    review: 'Amazing experience! Highly recommended!',
    userName: 'Jessica Smith',
    userImage: 'https://user-images.githubusercontent.com/99132893/233113431-3b63421f-0475-4f5c-8430-c17dae508dfe.jpeg',
  },
  {
    rating: 4.5,
    review: 'Great astrological insights. Helped me find clarity in my life.',
    userName: 'John Doe',
    userImage: 'https://user-images.githubusercontent.com/99132893/233114392-77ccaf59-aad9-4740-b4f1-9af1f6154155.jpeg',
  },
  {
    rating: 5,
    review: 'Accurate predictions and helpful guidance. Thank you!',
    userName: 'Emily Johnson',
    userImage: 'https://user-images.githubusercontent.com/99132893/233115066-49167937-6b1f-4ae6-95d4-94068a3ed805.jpeg',
  },
  {
    rating: 4.5,
    review: 'Excellent service. Will definitely consult again!',
    userName: 'Michael Brown',
    userImage: 'https://user-images.githubusercontent.com/99132893/233114711-f2a94a7e-8d0c-43af-a6bf-ca08cc6f49b0.jpeg',
  },
];

const Review = () => {
  const classes = useStyles();
  const [selectedUserIndex, setSelectedUserIndex] = useState(0);

  const handleUserClick = (index) => {
    setSelectedUserIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedUserIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Change the interval time (in milliseconds) to adjust the rotation speed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={classes.reviewContainer}>
      <Box className={classes.heading}>
        <img
          className={classes.starIcon}
          src="https://user-images.githubusercontent.com/99132893/232488929-b1d3abc9-f299-4e1a-a6fa-689bce962175.png"
          alt="star"
        />
        <Typography variant="h4" className={classes.subHeading}>
          User Review
        </Typography>
        <img
          className={classes.starIcon}
          src="https://user-images.githubusercontent.com/99132893/232488929-b1d3abc9-f299-4e1a-a6fa-689bce962175.png"
          alt="star"
        />
      </Box>
      <Box className={classes.reviewCard}>
        <div className={classes.ratingContainer}>
          {Array.from({ length: reviews[selectedUserIndex].rating }).map((_, index) => (
            <StarIcon key={index} className={classes.starIcon}/>
          ))}
        </div>
        <Typography variant="body1" className={classes.reviewText}>
          {reviews[selectedUserIndex].review}
        </Typography>
        <Typography variant="subtitle1" className={classes.userName}>
          - {reviews[selectedUserIndex].userName}
        </Typography>
      </Box>
      <div className={classes.userContainer}>
        {reviews.map((review, index) => (
          <Avatar
            key={index}
            alt={review.userName}
            src={review.userImage} 
            className={`${classes.userAvatar} ${
              selectedUserIndex === index ? classes.selectedUserAvatar : ''
            }`}
            onClick={() => handleUserClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Review;
