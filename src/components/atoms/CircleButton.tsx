import React from "react";
import { IconButton, SxProps } from "@mui/material";

interface ComponentTypes {
  sx?: SxProps;
  children?: React.ReactNode;
  [x:string]: any;
}

export default function CircleButton({ sx = {}, children, ...props }: ComponentTypes) {
  return (
    <IconButton sx={{ ...styles.container, ...sx }} {...props}>
      {children}
    </IconButton>
  );
}

const styles = {
  container: {
    color: "inherit",
    backgroundColor: "#515151",
    border: "1px solid #343333",
    borderRadius: "50%",
    backdropFilter: "blur(7px)",
    width: 24,
    height: 24,
    "&:hover": {
      backgroundColor: "#515151",
    },
    "& > *": {
      color: "#252525",
      width: 16,
      height: 16,
    },
  },
};
