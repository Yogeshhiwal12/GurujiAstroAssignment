import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chakra: {
    width: "95%",
    height: "auto",
    margin: "auto",
    padding: theme.spacing(3),
  
  },
  heading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
  },
  starIcon: {
    width: 27,
    height: 29,
  },
  subHeading: {
    padding: theme.spacing(0.5),
    fontFamily: "sansation",
    fontSize: 32,
    color: "#d97122",
    fontWeight: 700,
  },
  fullChakraDiv: {
    width: "100%",
    margin: "auto",
    height: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
   
  },
  sideDiv: {
    width: 150,
    height: "100%",
    display: "flex",
    marginTop: theme.spacing(1),
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  subDiv: {
    width: 170,
    height: 58,
    borderRadius: 9,
    marginBottom: 2.5,
    marginTop: 2.5,
    
    border: `2px solid #BD5300`,
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-between",
  },
  divIcon: {
    width: 50,
    height: "100%",
    
    
    backgroundColor: '#BD5300',
    fontSize: 20,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  divDetails: {
    width: 100,
    color: "#939393",
    padding: theme.spacing(1),
    fontSize: 14,
    fontWeight: 500,
    fontFamily: "Roboto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  chakraAnimation: {
    backgroundImage: "url(https://user-images.githubusercontent.com/99132893/232823140-cef51b2d-1730-4dcd-a106-9534b4ea82b8.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginRight:'60px'
  },
  outerChakra: {
    position: "relative",
  },
  chakraImage: {
    width: 450,
  },
}));

const Chakra = () => {
  const classes = useStyles();

  return (
    <Box className={classes.chakra}>
      <Box className={classes.heading}>
        <img
          className={classes.starIcon}
          src="https://user-images.githubusercontent.com/99132893/232488929-b1d3abc9-f299-4e1a-a6fa-689bce962175.png"
          alt="star"
        />
        <Typography variant="h1" className={classes.subHeading}>
          Many Problem one Solution
        </Typography>
        <img
          className={classes.starIcon}
          src="https://user-images.githubusercontent.com/99132893/232488929-b1d3abc9-f299-4e1a-a6fa-689bce962175.png"
          alt="star"
        />
      </Box>
      <Box className={classes.fullChakraDiv}>
        <Grid container spacing={2} item xs={12} sm={6} md={3} justify="center">
          <Grid item xs={12}>
            <motion.div
              className={classes.subDiv}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={classes.divIcon}>
                <CardMedia
                  component="img"
                  src="https://user-images.githubusercontent.com/99132893/232818785-446f8508-c970-40bb-907b-d3b428e3ea8f.png"
                  alt="love"
                />
              </div>
              <div className={classes.divDetails}>
                Love Related Problem
              </div>
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <motion.div
              className={classes.subDiv}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={classes.divIcon}>
                <CardMedia
                  component="img"
                  src="https://user-images.githubusercontent.com/99132893/232790447-dd15a99d-1cb0-4cf7-9812-d8126dd9025a.png"
                  alt="category"
                />
              </div>
              <div className={classes.divDetails}>Marriage Problem</div>
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <motion.div
              className={classes.subDiv}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={classes.divIcon}>
                <CardMedia
                  component="img"
                  src="https://user-images.githubusercontent.com/99132893/232791097-df6a0d59-8157-49c6-94ad-cfbfe117f41f.png"
                  alt="category"
                />
              </div>
              <div className={classes.divDetails}>Job/Business Problems</div>
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <motion.div
              className={classes.subDiv}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={classes.divIcon}>
                <CardMedia
                  component="img"
                  src="https://user-images.githubusercontent.com/99132893/232792675-fc9cf3fb-8b51-4c66-b8e1-d7774d08b8f4.png"
                  alt="category"
                />
              </div>
              <div className={classes.divDetails}>Money Problem</div>
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <motion.div
              className={classes.subDiv}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={classes.divIcon}>
                <CardMedia
                  component="img"
                  src="https://user-images.githubusercontent.com/99132893/232793462-956734ec-01f1-4e83-94f3-f1e715bf6965.png"
                  alt="category"
                />
              </div>
              <div className={classes.divDetails}>Education Problems</div>
            </motion.div>
          </Grid>
          
        </Grid>
        <motion.div
          className={`${classes.outerChakra} ${classes.chakraAnimation}`}
        >
          <img
            className={classes.chakraImage}
            src="https://user-images.githubusercontent.com/99132893/232808909-7217f195-5c55-4907-a79c-9fd5c7fd1420.png"
            alt="chakra"
          />
        </motion.div>
        <Grid container spacing={2} item xs={12} sm={6} md={3} >
          <Grid item xs={12}>
            <motion.div
              className={classes.subDiv}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={classes.divDetails}>Health Problems</div>
              <div className={classes.divIcon}>
                <CardMedia
                  component="img"
                  src="https://user-images.githubusercontent.com/99132893/232794360-05bff8be-23fe-48b0-85c0-2a4ebf13cd16.png"
                  alt="health"
                />
              </div>
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <motion.div
              className={classes.subDiv}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={classes.divDetails}>Grah Shanti</div>
              <div className={classes.divIcon}>
                <CardMedia
                  component="img"
                  src="https://user-images.githubusercontent.com/99132893/232796561-84cd84f2-b688-46c2-8395-0257ef747a9d.png"
                  alt="category"
                />
              </div>
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <motion.div
              className={classes.subDiv}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={classes.divDetails}>Child Birth Issues</div>
              <div className={classes.divIcon}>
                <CardMedia
                  component="img"
                  src="https://user-images.githubusercontent.com/99132893/232797046-455f0328-39da-45a1-92d7-25a4262bf1af.png"
                  alt="category"
                />
              </div>
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <motion.div
              className={classes.subDiv}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={classes.divDetails}>Husband Wife Problems</div>
              <div className={classes.divIcon}>
                <CardMedia
                  component="img"
                  src="https://user-images.githubusercontent.com/99132893/232797653-9f353a8f-65e7-40a4-8169-64abbc5393ec.png"
                  alt="category"
                />
              </div>
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <motion.div
              className={classes.subDiv}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={classes.divDetails}>Lucky Number / Color</div>
              <div className={classes.divIcon}>
                <CardMedia
                  component="img"
                  src="https://user-images.githubusercontent.com/99132893/232798217-c61feb6d-a29a-4163-8987-2f72be903967.png"
                  alt="category"
                />
              </div>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Chakra;
