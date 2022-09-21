import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ComponentTypes {
  items: Array<{label: string, value: string}>
}

export default function Accordions({ items = [] }: ComponentTypes) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {items.map((item, idx) => {
        const num = idx + 1;
        return (
          <Accordion
            sx={styles.container}
            expanded={expanded === `panel${num}`}
            onChange={handleChange(`panel${num}`)}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ fontSize: "3em", color: "white" }} />
              }
              aria-controls={`panel${num}-content`}
              id={`panel${num}-header`}
            >
              <Typography sx={{ fontSize: "clamp(18px,2vw,20px)", py: 2 }}>
                {item.label}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: 16, opacity: 0.7 }}>
                {item.value}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

const styles = {
  container: {
    background: "#252525",
    backgroundImage:
      "linear-gradient(263deg,rgba(47,47,47,.1) 0,rgba(47,47,47,0) 80%),linear-gradient(to bottom,rgba(90,90,90,.1) 0%,rgba(255,255,255,0) 63%)",
    textAlign: "left",
    color: "white",
    borderColor: "rgba(47, 47, 47, .3)",
    mb: 2,
  },
};
