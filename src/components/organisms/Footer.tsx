import { Box, Grid, IconButton, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import CustomAnchor from "../atoms/CustomAnchor";
import Wrapper from "../atoms/Wrapper";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
import BoxButton from "../atoms/BoxButton";
import Logo from "../atoms/Logo";
import CustomSelect from "../atoms/CustomSelect";
import CircleButton from "../atoms/CircleButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RedditIcon from "@mui/icons-material/Reddit";

export default function Footer() {
  return (
    <>
      <Wrapper sx={styles.container}>
        <Grid sx={styles.footer_1} container spacing={3}>
          <Grid sx={styles.footer_1_1} item xs={12} sm={12} md={2}>
            <Logo sx={{ mb: 1 }} />
            <Box
              sx={{
                "& > button:not(:first-of-type)": {
                  ml: 0.8,
                },
              }}
            >
              <CircleButton>
                <TwitterIcon />
              </CircleButton>
              <CircleButton>
                <TelegramIcon />
              </CircleButton>
              <CircleButton>
                <YouTubeIcon />
              </CircleButton>
              <CircleButton>
                <InstagramIcon />
              </CircleButton>
              <CircleButton>
                <LinkedInIcon />
              </CircleButton>
              <CircleButton>
                <RedditIcon />
              </CircleButton>
            </Box>
          </Grid>
          <Grid sx={styles.footer_1_2} item xs={12} sm={4} md={2}>
            <CustomAnchor>Discover</CustomAnchor>
            <CustomAnchor>Platform</CustomAnchor>
            <CustomAnchor>About</CustomAnchor>
          </Grid>
          <Grid sx={styles.footer_1_3} item xs={12} sm={4} md={2}>
            <CustomAnchor>Documentation</CustomAnchor>
            <CustomAnchor>Youtube</CustomAnchor>
            <CustomAnchor>Blog</CustomAnchor>
            <CustomAnchor>Press</CustomAnchor>
          </Grid>
          <Grid sx={styles.footer_1_4} item xs={12} sm={4} md={6}>
            <CustomSelect sx={styles.select} />
          </Grid>
        </Grid>
        <Grid sx={styles.footer_2} container alignItems="center">
          <Typography
            sx={{ whiteSpace: "nowrap", mr: "auto", maxWidth: "100px" }}
          >
            <Box
              component="span"
              style={{
                whiteSpace: "nowrap",
                marginLeft: "-10px",
                marginRight: "10px",
                display: "inline-block",
              }}
            >
              GHNY Contract:{" "}
            </Box>
            <Typography
              component="p"
              sx={{
                maxWidth: "100%",
                position: "relative",
                display: { xs: "block", md: "inline" },
                fontWeight: "700",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                padding: 0,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              0xa045E37a0D1dd3A45fefb8803D22457abc0A728a
            </Typography>
            <IconButton sx={{ ml: 1, color: "inherit" }}>
              <IosShareRoundedIcon />
            </IconButton>
            <IconButton sx={{ ml: 0.5, color: "inherit" }}>
              <ContentCopyRoundedIcon />
            </IconButton>
          </Typography>
          <Typography sx={{ whiteSpace: "nowrap" }}>
            Audited by
            <BoxButton sx={{ ml: 1 }}>
              <img
                src="https://grizzly.fi/assets/img/audits/hackenai.svg"
                alt=""
              />
            </BoxButton>
            <BoxButton sx={{ ml: 1 }}>
              <img
                src="https://grizzly.fi/assets/img/audits/fatf.svg"
                alt=""
              />
            </BoxButton>
            <BoxButton sx={{ ml: 1 }}>
              <img
                src="https://grizzly.fi/assets/img/audits/a.svg"
                alt=""
              />
            </BoxButton>
          </Typography>
        </Grid>
        <Grid
          sx={styles.footer_3}
          container
          alignItems="center"
          justifyContent={"center"}
          spacing={1.5}
        >
          <Grid item xs={12} md={4}>
            <Typography>
              &copy; {moment().format("YYYY")} JANIS FI DMCC
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={4}
            alignItems="center"
            direction="row"
            justifyContent="center"
            wrap="nowrap"
          >
            <CustomAnchor sx={{ px: 2 }}>Data Privacy Policy</CustomAnchor>
            <CustomAnchor sx={{ px: 2 }}>Imprint</CustomAnchor>
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomAnchor href="#">Go up ↑</CustomAnchor>
          </Grid>
        </Grid>
      </Wrapper>
      <Box sx={styles.footer_4}>
        <Wrapper>
          <Grid container alignItems="center" spacing="1">
            <Grid item xs={12} md={4}>
              <Typography component="a" href="/">
                JOIN OUR BUG BOUNTY PROGRAM
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography component="a" href="/">
                FIND BUGS AND EARN $100.000
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography component="a" href="/">
                JOIN NOW
              </Typography>
            </Grid>
          </Grid>
        </Wrapper>
      </Box>
    </>
  );
}

const styles = {
  container: {
    pt: "100px",
    backgroundColor: "#252525",
    color: "white",
  },
  footer_1: {
    pt: 2,
    pb: 8,
    px: 2,
    alignItems: "flex-start",
  },
  footer_1_1: {
    textAlign: "center",
  },
  footer_1_2: {
    textAlign: "center",
    "& > a": {
      margin: 1,
    },
  },
  footer_1_3: {
    textAlign: "center",
    "& > a": {
      margin: 1,
    },
  },
  footer_1_4: {
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "center", md: "flex-end" },
  },
  select: {
    width: "clamp(170px, 180px, 240px)",
    "font-size": "inherit",
    "font-weight": 400,
    "line-height": 1.125,
    "font-family": "Roboto,Helvetica Neue,sans-serif",
    "letter-spacing": "normal",
    "& > div": {
      borderRadius: 5,
    },
  },
  footer_2: {
    pb: 6,
    px: 2,
    "@media (max-width: 900px)": {
      flexDirection: "column",
      textAlign: "center",
      "& p": {
        mx: 0,
        whiteSpace: "normal",
      },
    },
  },
  footer_3: {
    textAlign: "center",
    pb: 5,
    px: 2,
    "& *": {
      fontSize: "14px",
    },
  },
  footer_4: {
    backgroundColor: "#205da1",
    textAlign: "center",
    py: 1,
    "& a": {
      fontSize: 13,
      color: "white",
      textDecoration: "none",
      mx: 5,
      mb: { xs: 2, md: 0 },
    },
  },
};
