import { Box, Typography } from "@mui/material";
import React from "react";
import Accordions from "../atoms/Accordions";
import Wrapper from "../atoms/Wrapper";

export default function Main() {
  return (
    <Wrapper sx={styles.container}>
      <Box sx={styles.blurBackground}></Box>
      <Box sx={{ position: "relative" }}>
        <Box>
          <Typography sx={styles.title} variant="h3" component="h1">
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <img
                style={styles.coinLeft as React.CSSProperties}
                width={44}
                src={require("../../assets/tokens_jc/jc.svg").default}
                alt="jc"
              />
            </Box>
            Frequently Asked Questions
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <img
                style={styles.coinRight as React.CSSProperties}
                width={44}
                src={require("../../assets/tokens_jc/jc.svg").default}
                alt="jc"
              />
            </Box>
          </Typography>
        </Box>
        <Box>
          <Typography sx={styles.subtitle} variant="h5" component="a" href="#">
            Read the Documentation First
          </Typography>
        </Box>
        <Box>
          <Accordions items={faqs} />
        </Box>
      </Box>
    </Wrapper>
  );
}

const styles = {
  container: {
    pt: "100px",
    textAlign: "center",
    color: "white",
    backgroundColor: "#252525",
    position: "relative",
    "& a": {
      color: "inherit",
    },
  },
  blurBackground: {
    position: "absolute",
    top: -5,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#252525",
    filter: "blur(30px)",
    zIndex: 0,
  },
  title: {
    mb: 7,
    fontWeight: 700,
    color: "#ffe2cc",
    maxWidth: "fit-content",
    fontFamily: "Boston-Bold",
    mx: "auto",
    position: "relative",
    fontSize: "clamp(1.25em,3vw,2.5em)",
  },
  subtitle: {
    display: "inline-block",
    mb: 5,
    fontSize: "clamp(1.1em,3vw,1.6em)",
  },
  coinLeft: {
    position: "absolute",
    top: "-50px",
    left: "-50px",
    animationName: "coinMoveLeft",
    animationDuration: "5s",
    animationIterationCount: "infinite",
    animationFillMode: "backwards",
  },
  coinRight: {
    position: "absolute",
    top: "-50px",
    right: "-50px",
    animationName: "coinMoveRight",
    animationDuration: "5s",
    animationIterationCount: "infinite",
    animationFillMode: "forwards",
  },
};

const faqs = [
  {
    label: " Does it matter what price I get? ",
    value: "Not really, since price is relative you will get the best anyways.",
  },
  {
    label: " How long is the deposit pool open? ",
    value: "The pool is open for 3 days.",
  },
  {
    label: " Does it matter on which day i deposit? ",
    value:
      "No it doesnt. You get the same price if you deposit your BNBs on the 1st or 3rd day.",
  },
  {
    label: " Can I withdraw my funds once i have paid into the deposit pool? ",
    value:
      "No you cannot. In order to prohibit price manipulation by whales who would withdraw at last second, withdrawals are not possible.",
  },
  {
    label: " Are the purchased GHNY tokens vested? ",
    value:
      "Yes, your tokens are vested in the beginning and gradually released over the course of one month. After a day, about 3% of the tokens are distributed, after a week roughly 25%, after 2 weeks 50% and after one month 100% will have been distributed to all participants.",
  },
  {
    label:
      " Do I have to use this Community Fairlaunch or can I also buy on Pancakeswap like I usually do? ",
    value:
      "You will also be able to buy at Pancakeswap at the higher price. There your tokens will not be vested.",
  },
  {
    label: " How do I get my purchased GHNY on my wallet? ",
    value:
      "You have to claim it on the Claim Page of grizzly.fi or on bscscan. Because you have to pay gas fees every time you “claim”, we don’t recommend claiming your rewards multiple times a day.  The GHNYs are available to claim per block; every 3 seconds.",
  },
  {
    label: " What should I do with my claimed GHNY tokens? ",
    value:
      "No Financial Adivce. You can either sell them right away or you can be a smart Grizzly and stake them in the Honeypot and mulitply your Honey Tokens. The first Months after launch is called the “Distribution Phase”. Because of high staking APRs it is easy to accumulate many GHNYs . After that phase, minting of new GHNYs will be greatly decreased and GHNY will become much more scarce while the use-cases and revenue-share mechanisms increase. You will have to decide on your own if you are in this project short or long-term.",
  },
  {
    label: " How can you guarantee that this pool is the first to buy? ",
    value:
      "Because the first seconds after liquidity is added, only the whitelisted address of the deposit pool is eligible to buy. Furthermore everything happens in one transaction which cannot be intervened.",
  },
  {
    label: " Is this an ICO? ",
    value:
      "No It is not.  An initial coin offering (ICO) is the cryptocurrency industry’s equivalent of an initial public offering (IPO). A company seeking to raise money to create a new coin, app, or service can launch an ICO as a way to raise funds. Interested investors can buy into an initial coin offering to receive a new cryptocurrency token issued by the company. To do an ICO you need to do a KYC.  The key difference is that with an ICO, a sum of tokens are sold at a fixed valuation. The Community Fairlaunch is just a way to buy tokens on a decentralized exchange (pancakeswap). The tokens are bought from a so called “liquidity pool” - calculated with the Constant Product Formula. With more money in the Community Pool, the decentralized smart contract buys more tokens at a higher price (constant product formula). Furthermore, the BNBs raised stay in the protocol, while an ICO, as described above, is a way to raise funds.",
  },
  {
    label: " Can I use BUSD to participate? ",
    value: "No. Only BNB will be accepted in the contract.",
  },
  {
    label: " How much Liquidity is added as initial Liquidity? ",
    value:
      "Approximately $250.000 in BNB paired with exactly 500.000 GHNY tokens. This sets the Listing Price to $0.50.",
  },
  {
    label: " How much Liquidity is added as additional Liquidity? ",
    value:
      "This greatly depends how much was gathered in the deposit pool. The more money collected in the deposit pool of the Community Fairlaunch, the higher the percentage that is added as additional Liquidity which is owned by the protocol.",
  },
  {
    label: " How is the 3x generated? ",
    value:
      "Everybody in the Community Fairlaunch gets the same “Average Price” which is calculated the following:  Average Price = “Invested Sum” / “Number of bought tokens”  After the deposit pool has used its BNBs to buy GHNY, the price jumps to the “New Price”. On decentralized exchanges like pancakeswap the price is calculated by the “Constant Product Formula”.  For a high investment sum of 10 Million Dollar in BNB, the GHNY price would skyrocket from $0,50 to $840,50. The Average Price would be $20,50. It wouldn't be a 3x but a 41x. Down below in the chapter “Protocol Owned Liquidity” it is explained why it would not be smart to let the token skyrocket this much but why it makes sense to cap it to a 3x. We do this by adding more liquidity to the pool instead of buying GHNY with the entire sum.  The Price with 10 Million Dollar in BNB would be $80,49 not $840,50 and therefore a lot less volatile.",
  },
  {
    label: " Is a 3x guaranteed? ",
    value:
      "No it is not guaranteed.  For the “New Price” to be 3x higher than the “Average Price”, at least $500.000 worth of BNB would need to be collected in the deposit pool of the Community Fairlaunch. Furthermore, some short term oriented people will sell their GHNYs as soon as they can which could put the price below the 3x. Therefore the 3x is not guaranteed but just an expression that starting from a investment sum of $500k the “New Price” will start 3x higher than the “Average Price”.",
  },
];
