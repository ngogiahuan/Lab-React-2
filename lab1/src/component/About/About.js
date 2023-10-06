import { Container, Typography } from "@mui/material";
import React from "react";
import "./About.css";
import { ThemeContext } from "../ThemeContext";

export default function About() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Container
      className="about-container"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to our website! We are a passionate team dedicated to providing
        you with the latest news and information from around the world.
      </Typography>
      <Typography variant="body1" paragraph>
        Our mission is to keep you informed about the most important events and
        stories, whether it's breaking news, in-depth analysis, or inspiring
        human interest stories.
      </Typography>
      <Typography variant="body1" paragraph>
        We believe in the power of information to shape the world and empower
        individuals. That's why we strive to deliver accurate, unbiased, and
        timely news to our readers.
      </Typography>
      <Typography variant="body1" paragraph>
        Thank you for visiting our website, and we hope you find our content
        valuable and informative. If you have any questions or feedback, please
        don't hesitate to contact us.
      </Typography>
    </Container>
  );
}
