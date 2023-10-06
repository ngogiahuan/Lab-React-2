import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { filmsData } from "../ListOfFilms";
import "./FIlmSlider.css";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function FilmSlider() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = filmsData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const theme = useContext(ThemeContext);

  return (
    <div
      className="filmslider-container"
      style={{
        backgroundImage: `url(${filmsData[activeStep].image})`,
      }}
    >
      <div className="black-filter"></div>
      <Box
        sx={{
          maxWidth: 400,
          flexGrow: 1,
          marginTop: 10,
          backgroundColor: theme.theme.backgroundColor,
          color: theme.theme.color,
          borderRadius: 2,
          borderColor: "#4da129",
        }}
      >
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
            backgroundColor: theme.theme.backgroundColor,
            color: theme.theme.color,
          }}
        >
          <Typography>{filmsData[activeStep].title}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {filmsData.map((film, index) => (
            <div key={film.id}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 500,
                    display: "block",
                    maxWidth: 400,
                    overflow: "hidden",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src={film.image}
                  alt={film.title}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          style={{
            backgroundColor: theme.theme.backgroundColor,
            color: theme.theme.color,
          }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </div>
  );
}

export default FilmSlider;
