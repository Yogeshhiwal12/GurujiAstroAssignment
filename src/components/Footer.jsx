import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, TextField, Button } from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  footerFullDiv: {
    backgroundColor: "#f1f1f1",
    padding: theme.spacing(4),
    display: "flex",
    backgroundColor: "#BD5300",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  aboutDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    color: "white",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },
  navbarLogo: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  logo: {
    width: "50px",
    height: "50px",
    marginRight: theme.spacing(1),
  },
  about: {
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
  socialMedia: {
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  socialMediaIcon: {
    width: "40px",
    height: "40px",
    margin: theme.spacing(0, 1),
    cursor: "pointer",
  },
  seals: {
    marginBottom: theme.spacing(4),
  },
  sealLogo: {
    width: "100px",
    height: "auto",
    margin: theme.spacing(1),
  },
  midDiv: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
    color: "white",
    
  },
  midSub: {
    display: "flex",
    flexDirection: "column",
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formInput: {
    marginBottom: theme.spacing(2),
    backgroundColor: "#fff",
    borderRadius: "5px",
    width: "100%",
    maxWidth: "300px",
  },
}));

const Footer = () => {
  const classes = useStyles();

  const handleOnClick = (e) => {
    e.preventDefault();
    toast.success("Your Query Submitted Successfully...", {
      position: "top-left",
      theme: "colored",
    });
  };

  return (
    <div className={classes.footerFullDiv}>
      <div className={classes.aboutDiv}>
        <div className={classes.navbarLogo}>
          <img
            src="https://user-images.githubusercontent.com/99132893/232487978-470f10f8-1077-4fc2-b691-c9ed4859dd21.jpg"
            alt="web-logo"
            className={classes.logo}
          />
          <Typography variant="h6">Guruji</Typography>
        </div>
        <Typography variant="body1" className={classes.about}>
          About Guruji s2 to 3 lines what guruji do and how it works About
          Guruji s2 to 3 lines what guruji do and how it works
        </Typography>
        <div className={classes.socialMedia}>
          <motion.img
            src="https://user-images.githubusercontent.com/99132893/233530372-209cea34-844d-40f2-a6f8-fb47d84bc46b.png"
            alt="facebook"
            className={classes.socialMediaIcon}
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src="https://user-images.githubusercontent.com/99132893/233530681-823ca6b9-90e9-44d2-bb11-296f5702d935.png"
            alt="instagram"
            className={classes.socialMediaIcon}
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src="https://user-images.githubusercontent.com/99132893/233530879-e729b0b6-8bc4-43aa-a8e4-b323b2044200.png"
            alt="twitter"
            className={classes.socialMediaIcon}
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src="https://user-images.githubusercontent.com/99132893/233531042-fbf67580-9fed-45b3-aa18-1e2e03d29450.png"
            alt="youtube"
            className={classes.socialMediaIcon}
            whileHover={{ scale: 1.2 }}
          />
        </div>
        <div className={classes.seals}>
          <Typography variant="subtitle1">Trusted & Seals</Typography>
          <div>
            <img
              src="https://user-images.githubusercontent.com/99132893/233533868-98a66dee-e89a-4808-a063-6950d56e44ee.png"
              alt="razorpay"
              className={classes.sealLogo}
            />
            <img
              src="https://user-images.githubusercontent.com/99132893/233534257-7f116a53-c2ce-4b77-8968-e645ea695572.png"
              alt="paytm"
              className={classes.sealLogo}
            />
            <img
              src="https://user-images.githubusercontent.com/99132893/233534524-2b9740c3-06a5-4eb1-a4e3-2ef496d8475a.png"
              alt="stripe"
              className={classes.sealLogo}
            />
          </div>
        </div>
      </div>
      <Grid container className={classes.midDiv}>
        <Grid item xs={6} md={5} className={classes.midSub}>
          <Typography variant="subtitle1">Company</Typography>
          <Typography variant="body2">Home</Typography>
          <Typography variant="body2">Privacy Policy</Typography>
          <Typography variant="body2">T & C</Typography>
          <Typography variant="body2">Varied Payment</Typography>
        </Grid>
        <Grid item xs={6} md={5} className={classes.midSub}>
          <Typography variant="subtitle1">Collaborate</Typography>
          <Typography variant="body2">Clever Tap</Typography>
          <Typography variant="body2">Exotel</Typography>
          <Typography variant="body2">Facebook</Typography>
          <Typography variant="body2">Quora</Typography>
          <Typography variant="body2">Google</Typography>
          <Typography variant="body2">Youtube</Typography>
        </Grid>
        <Grid item xs={6} md={5} className={classes.midSub}>
          <Typography variant="subtitle1">Support</Typography>
          <Typography variant="body2">Home</Typography>
          <Typography variant="body2">Privacy Policy</Typography>
          <Typography variant="body2">T & C</Typography>
          <Typography variant="body2">Varied Payment</Typography>
        </Grid>
        <Grid item xs={6} md={5} className={classes.midSub}>
          <Typography variant="subtitle1">Important Link</Typography>
          <Typography variant="body2">Tarot Reader</Typography>
          <Typography variant="body2">Vedic Astrology</Typography>
          <Typography variant="body2">Palmistry</Typography>
          <Typography variant="body2">Gemology</Typography>
          <Typography variant="body2">Vastu</Typography>
          <Typography variant="body2">Numerology</Typography>
        </Grid>
      </Grid>
      <div className={classes.form}>
        <form onSubmit={handleOnClick}>
          <TextField
            type="text"
            placeholder="Your Name"
            required
            variant="outlined"
            className={classes.formInput}
          />
          <TextField
            type="email"
            placeholder="Mail ID"
            required
            variant="outlined"
            className={classes.formInput}
          />
          <TextField
            placeholder="Write Query"
            variant="outlined"
            multiline
            rows={4}
            required
            className={classes.formInput}
          />
          <Button type="submit" variant="contained" style={{backgroundColor:'green',color:"white",width:'300px'}}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
