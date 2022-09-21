import React from 'react'
import Container from '@mui/material/Container';

interface ComponentTypes {
  children?: React.ReactNode;
  [x:string]: any;
}

const Wrapper = ({children, ...props}: ComponentTypes) => {
  return (
    <Container maxWidth="xl" {...props}>
      {children}
    </Container>
  )
}

export default Wrapper