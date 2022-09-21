import React from 'react';
import { ReactComponent as JanisCapitalLogo } from "../../assets/janis_capital_logo/janis_capital_logo.svg";

export default function Logo({sx = {}}) {
  return (
    <JanisCapitalLogo style={{ minWidth: "100px", maxWidth: "130px", ...sx }} />
  )
}
