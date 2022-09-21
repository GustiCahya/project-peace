import { Box, ButtonBase, Grid, Grow, Typography } from "@mui/material";
import React from "react";
import Wrapper from "../atoms/Wrapper";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

export default function Hero() {
  return (
    <Box sx={styles.container}>
      <Wrapper>
        <Grid container columnSpacing={5}>
          <Grid sx={styles.boxTitle} container item xs={12} md={6} direction="column">
            <Grid item>
              <Grow in={true} style={{ transformOrigin: "0 0 0" }} timeout={500}>
                <Typography sx={styles.title} component="h1" gutterBottom>
                  <span style={{ color: "#ffe2cc" }}>Janis</span> Community
                  Fairlaunch
                </Typography>
              </Grow>
            </Grid>
            <Grid item>
              <Grow in={true} style={{ transformOrigin: "0 0 0" }} timeout={1500}>
                <Typography
                  sx={styles.subtitle}
                  variant="h6"
                  component="p"
                  gutterBottom
                >
                  Be the first one to buy GHNY at launch by investing BNB directly
                  into the deposit pool of the smart contract!
                </Typography>
              </Grow>
            </Grid>
          </Grid>
          <Grid sx={styles.mainHeroBox} container item xs={12} md={6}>
            <Grid sx={styles.heroBox} container item>
              <Grid
                container
                item
                justifyContent="space-around"
                flexDirection="row"
              >
                <Grid
                  sx={{
                    ...styles.timeBox,
                    borderLeft: "none",
                    borderTop: "none",
                  }}
                  container
                  item
                  xs={4}
                >
                  <Grid item>
                    <Typography variant="h4" component="p">
                      <strong>0</strong> Days
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  sx={{
                    ...styles.timeBox,
                    borderLeft: "none",
                    borderTop: "none",
                  }}
                  container
                  item
                  xs={4}
                >
                  <Grid item>
                    <Typography variant="h4" component="p">
                      <strong>0</strong> h
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  sx={{
                    ...styles.timeBox,
                    borderLeft: "none",
                    borderTop: "none",
                    borderRight: "none",
                  }}
                  container
                  item
                  xs={4}
                >
                  <Grid item>
                    <Typography variant="h4" component="p">
                      <strong>0</strong> min
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container item justifyContent="space-around">
                <Grid sx={{ pt: 3, pb: 4, px: 1 }} item>
                  <Typography sx={{ fontSize: 13 }} gutterBottom>
                    Total Value Locked
                  </Typography>
                  <Typography sx={{ fontSize: 10, opacity: 0.7 }}>
                    (Subject to Change)
                  </Typography>
                </Grid>
                <Grid sx={{ pt: 3, pb: 4, px: 1 }} item>
                  <Typography sx={{ fontSize: 13 }} gutterBottom>
                    Price After the Launch
                  </Typography>
                  <Typography sx={{ fontSize: 10, opacity: 0.7 }}>
                    (Subject to Change)
                  </Typography>
                </Grid>
                <Grid sx={{ pt: 3, pb: 4, px: 1 }} item>
                  <Typography sx={{ fontSize: 13 }} gutterBottom>
                    Average Price
                  </Typography>
                  <Typography sx={{ fontSize: 10, opacity: 0.7 }}>
                    (Subject to Change)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid sx={{ ...styles.heroBox, mt: 4 }} container item>
              <Grid
                sx={{ py: 3, borderBottom: 1, borderColor: "#ffffff4d" }}
                container
                item
                justifyContent="center"
              >
                <Typography
                  sx={{ textAlign: "center", fontSize: 20, opacity: 0.7 }}
                >
                  Community Fairlaunch has ended
                </Typography>
              </Grid>
              <Grid
                sx={{
                  pt: 3,
                  pb: 2,
                  px: 2,
                  borderBottom: 1,
                  borderColor: "#ffffff4d",
                }}
                container
                item
              >
                <Grid sx={{ mb: 1 }} container item>
                  <Typography sx={{ mr: "auto", opacity: 0.7 }}>
                    Your entry:
                  </Typography>
                  <Typography>BNB ≈ GHNY</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ fontSize: 13, opacity: 0.7 }}>
                    (Subject to Change: The more BNBs deposited in total, the
                    smaller your proportion and GHNYs you will receive.)
                  </Typography>
                </Grid>
              </Grid>
              <Grid sx={{ py: 3, px: 2 }} container item>
                <Grid sx={{ opacity: 0.9 }} container item alignItems="center">
                  <ButtonBase sx={{ padding: 0.5, mr: "auto" }}>
                    <Typography sx={{ mr: 1 }}>Token Contract</Typography>
                    <Typography>
                      <IosShareRoundedIcon />
                    </Typography>
                  </ButtonBase>
                  <ButtonBase sx={{ padding: 0.5 }}>
                    <Typography>
                      <ContentCopyRoundedIcon />
                    </Typography>
                  </ButtonBase>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      padding: 0.5,
                      pt: 1,
                      display: "inline-block",
                      color: "#ffffff",
                    }}
                    component="a"
                    href="/"
                  >
                    Add to Coinmarketcap Watchlist
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>
      <Box sx={styles.topbar}>
        <img src={require('../../assets/top_bar/left.svg').default} height="100%" width="50%" alt="" />
        <img src={require('../../assets/top_bar/right.svg').default} height="100%" width="50%" alt="" />
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    py: 18,
    color: "white",
    position: "relative",
    backgroundImage: `linear-gradient(to right, rgba(0,0,0,.8),rgba(0,0,0,.3)), url(${
      require("../../assets/backgrounds/4x3.svg").default
    })`,
    "@media (min-width: 1280px)": {
      backgroundImage: `linear-gradient(to right, rgba(0,0,0,.8),rgba(0,0,0,.3)), url(${
        require("../../assets/backgrounds/1280x2778.svg").default
      })`,
    },
    "@media (min-width: 1920px)": {
      backgroundImage: `linear-gradient(to right, rgba(0,0,0,.8),rgba(0,0,0,.3)), url(${
        require("../../assets/backgrounds/1920x1080.svg").default
      })`,
    },
    "@media (min-width: 2224px)": {
      backgroundImage: `linear-gradient(to right, rgba(0,0,0,.8),rgba(0,0,0,.3)), url(${
        require("../../assets/backgrounds/2224x1668.svg").default
      })`,
    },
    "@media (min-width: 5120px)": {
      backgroundImage: `linear-gradient(to right, rgba(0,0,0,.8),rgba(0,0,0,.3)), url(${
        require("../../assets/backgrounds/5120x1440.svg").default
      })`,
    },
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    "@media (max-width: 900px)": {
      pt: 15,
    },
  },
  title: {
    margin: "0",
    fontWeight: "700",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.14",
    letterSpacing: "normal",
    color: "white",
    fontFamily: "Boston-Bold",
    mb: 1,
    fontSize: "clamp(2em, 4vw, 3.5em)",
    "@media (max-width: 1000px)": {
      mb: 2
    },
    textAlign: {xs: "center", md: "left"}
  },
  subtitle: {
    fontWeight: "400",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.63",
    letterSpacing: "normal",
    color: "white",
    fontSize: "clamp(1em, 1vw, 1.5em)",
    "@media (max-width: 1000px)": {
      mb: 6,
    },
    textAlign: {xs: "center", md: "left"}
  },
  boxTitle: {
    zIndex: 2,
  },
  mainHeroBox: {
    zIndex: 2,
    "@media (max-width: 900px)": {
      justifyContent: "center",
    },
  },
  heroBox: {
    minWidth: "340px",
    maxWidth: "46em",
    background: "rgba(0,0,0,0)",
    borderRadius: "27px",
    backdropFilter: "blur(11px)",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#ffffff4d",
    borderImageSlice: "1",
    backgroundImage:
      "linear-gradient(248deg,rgba(46,46,46,.42) 96%,rgba(47,47,47,.42) 3%),linear-gradient(to bottom,rgba(255,255,255,.08) 0%,rgba(179,179,179,.17) 100%)",
    backgroundOrigin: "border-box",
    backgroundClip: "content-box,border-box",
  },
  timeBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
    fontSize: 35,
    border: "1px solid #ffffff4d",
    "& strong": { color: "#ffe2cc", fontWeight: "bold" },
    "@media (max-width: 1050px)": {
      "& p": {
        fontSize: 30,
      },
    },
    "@media (max-width: 1025px)": {
      "& p": {
        fontSize: 25,
      },
    },
    "@media (max-width: 898px)": {
      "& p": {
        fontSize: "2.125rem",
      },
    },
    "@media (max-width: 530px)": {
      "& p": {
        fontSize: 21,
      },
    },
  },
  topbar: {
    display: "flex",
    position: "absolute",
    alignItems: "flex-end",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
    "& img:first-of-type": {
      zIndex: 1
    },
    "& img:last-of-type": {
      position: "relative",
      left: -1.8,
      zIndex: 0
    },
  }
};
