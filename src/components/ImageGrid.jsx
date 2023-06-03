import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
 
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
  },
  cardBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  singleCard: {
    marginBottom: "20px",
    backgroundSize: "cover",
    width: "386px",
    marginTop:'20px',
    height: "400px",
    borderRadius: "8px",
    "&:nth-child(3n+2)": {
      marginTop: "50px",
    },
  },
  downCompo: {
    display: "flex",
    backgroundColor: "#a95210",
    width: "386px",
    height: "52px",
    position: "relative",
    top: "-5px",
    borderRadius: "0px 0px 8px 8px",
    fontSize: "20px",
    color: "white",
 
  },
  chat: {
    width: "51%",
    height: "100%",
    borderRight: "2px solid white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  call: {
    width: "49%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  liveBox: {
    width: "67px",
    height: "67px",
    position: "relative",
    top: "25px",
    left: "160px",
    backgroundColor: "#833800",
    zIndex: "2",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "38px",
    color: "white",
    boxShadow: "0px 2px 0px 0px",
  },
  liveLetter: {
    width: "auto",
    height: "auto",
    padding: "2px",
    borderRadius: "3px",
    color: "#a95210",
    backgroundColor: "white",
    fontSize: "10px",
    fontWeight: "700",
  },
  astroDetails: {
    width: "300px",
    height: "170px",
    top: "70px",
    textAlign: "start",
    paddingLeft: "10px",
    position: "relative",
    fontSize: "16px",
    color: "white",
  },
  astroDetailsName: {
    fontWeight: "600",
  },
  astroDetailsSpecialties: {
    fontSize: "12px",
  },
  astroDetailsSkills: {
    color: "#ffdbc0",
  },
  astroDetailsSkillsIcon: {
    color: "#fdcc0d",
  },
  priceBox: {
    width: "150px",
    position: "relative",
    height: "70px",
    top: "200px",
    left: "235px",
    color: "#59dd47",
    fontWeight: "700",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > p": {
      fontSize: "14px",
    },
    "& > span": {
      fontSize: "17px",
    },
    "& > i": {
      fontSize: "30px",
    },
  },
  expAndOnlineIndicator: {
    width: "100%",
    height: "54px",
    position: "relative",
    color: "white",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& > span": {
      fontSize: "18px",
      fontWeight: "600",
    },
  },
  online: {
    width: "70px",
    height: "30px",
    borderRadius: "10px",
    padding: "4px",
    marginRight:'10px',
    backgroundColor: "black",
    opacity: "0.5",
    display: "flex",
    padding:"8px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#2cdc00",
  },
  rating: {
    "& > i": {
      color: "#f7c80e",
    },
  },
}));


const AstroCard = () => {
  const slide = [
    "https://user-images.githubusercontent.com/99132893/232652150-75e73352-c7c6-455b-b741-b464f942680e.jpg",
    "https://user-images.githubusercontent.com/99132893/232684053-253d9c17-49a9-4b3a-91d2-8d486f0c3656.jpg",
    "https://user-images.githubusercontent.com/99132893/232684191-5681d135-97e4-423e-bbd1-55606846b3b5.jpg",
    "https://user-images.githubusercontent.com/99132893/232684276-4a123c45-ab73-44ea-b0a6-c0544ec0d8e2.jpeg",
    "https://user-images.githubusercontent.com/99132893/232684398-f4e575b2-c868-4b6b-8426-a439e5e009ad.jpeg",
    "https://user-images.githubusercontent.com/99132893/232684582-38eeac49-1494-4159-8398-fd3d080051a0.jpeg",
    "https://user-images.githubusercontent.com/99132893/232767951-fd816895-4263-4c00-9ce4-49bcd9e2d0db.jpeg",
    "https://user-images.githubusercontent.com/99132893/232684791-ee968e17-bd61-4658-83d8-eb9f0749bdb0.jpg",
    "https://user-images.githubusercontent.com/99132893/232684865-31f956f1-7339-47a8-b961-ae6df04d33e8.jpg",
  ];
  const classes = useStyles();

  return (
    <> <Box className={classes.heading}>
    <img
      className={classes.starIcon}
      src="https://user-images.githubusercontent.com/99132893/232488929-b1d3abc9-f299-4e1a-a6fa-689bce962175.png"
      alt="star"
    />
    <Typography variant="h4" className={classes.subHeading}>
     Premium Astrologers
    </Typography>
    <img
      className={classes.starIcon}
      src="https://user-images.githubusercontent.com/99132893/232488929-b1d3abc9-f299-4e1a-a6fa-689bce962175.png"
      alt="star"
    />
  </Box>
    <div className={classes.cardBox}>
      {slide.map((s, i) => (
        <div key={i}>
          <div
            className={classes.singleCard}
            style={{ backgroundImage: `url(${s})` }}
          >
            <div className={classes.expAndOnlineIndicator}>
              <span>10+ Years</span>
              <div className={classes.online}>
                <div className={classes.dot}></div>
                <p>Online</p>
              </div>
            </div>
            <div className={classes.priceBox}>
              <p>price</p>
              <span>
                <i className="fa-solid fa-indian-rupee-sign">10</i>/min
              </span>
            </div>
            <div className={classes.astroDetails}>
              <div className={classes.rating}>
                <i className="fa-solid fa-star"></i>4.5
              </div>
              <h3 className={classes.astroDetailsName}>Astrologer Ramraj</h3>
              <p>Specialties</p>
              <h5 className={classes.astroDetailsSpecialties}>
                Love, Business, Life
              </h5>
              <p>Skills</p>
              <h5 className={classes.astroDetailsSkills}>
                Vedic Astrology, Kundali
              </h5>
            </div>
            <div className={classes.liveBox}>
              <i className="fa-regular fa-circle-play">
                <div className={classes.liveLetter}>Live</div>
              </i>
            </div>
            <div className={classes.downCompo}>
              <div className={classes.chat}>
                <i className="fa-brands fa-rocketchat"></i>
                Chat
              </div>
              <div className={classes.call}>
                <i className="fa-solid fa-phone"></i>
                Call
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};





export default AstroCard;
