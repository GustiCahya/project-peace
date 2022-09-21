import React from "react";
import { Typography, SxProps } from "@mui/material";

interface ComponentTypes {
  sx?: SxProps;
  href?: string;
  children?: React.ReactNode;
  [x:string]: any;
}

export default function CustomAnchor({sx = {}, href = "/", children, ...props}: ComponentTypes) {
  return (
    <Typography
      component="a"
      sx={{
        display: "block",
        textTransform: "none",
        borderRadius: "4px",
        letterSpacing: 0.5,
        color: "rgba(255,255,255,.8)",
        transition: "0.15s ease-in-out",
        textDecoration: "none",
        "&:hover": {
          color: "rgba(255,255,255,1)",
        },
        ...sx
      }}
      href={href}
      {...props}
    >
      {children}
    </Typography>
  );
}
