import { IconButton, SxProps } from '@mui/material';
import React from 'react';

interface ComponentTypes {
  sx?: SxProps;
  children?: React.ReactNode;
  [x:string]: any;
}

export default function BoxButton({sx = {}, children, ...props} : ComponentTypes) {
  return (
    <IconButton sx={{...styles.container, ...sx}} {...props}>
        {children}
    </IconButton>
  )
}

const styles = {
    container: {
        color: "inherit",
        backgroundColor: "rgba(51,51,51,0.6)",
        border: "1px solid #343333",
        width: "28px",
        height: "28px",
        padding: "8px",
        borderRadius: "7px",
        backdropFilter: "blur(7px)",
        "& > img": {
            width: "15px"
        }
    }
};
