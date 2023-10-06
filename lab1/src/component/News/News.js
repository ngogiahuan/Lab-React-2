import { Container, Grid } from "@mui/material";
import React from "react";
import "./News.css";
import { ThemeContext } from "../ThemeContext";
import FilmSlider from "../Films/FilmSlider/FilmSlider";

export default function News() {
  const { theme } = React.useContext(ThemeContext);
  return <FilmSlider></FilmSlider>;
}
