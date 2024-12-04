import { data } from "@/assests/data";
import { COLORS } from "@/utils/color";
import { inter, roboto } from "@/utils/fonts";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Clients from "./clients";

const Projects = () => {
  const sliderRef = useRef();

  const slideNext = () => {
    sliderRef.current.swiper.slideNext();
  };
  const slidePrev = () => {
    sliderRef.current.swiper.slidePrev();
  };

  return (
    <Box sx={{ backgroundColor: COLORS.DARKBLUE, pt: 10, pb: 10 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ lg: "row", xs: "column" }}
          alignItems={{ lg: "center", xs: "start" }}
          justifyContent={{ lg: "space-between" }}
          mb={2}
        >
          <Typography
            sx={{
              fontSize: { lg: 50, xs: 30 },
              color: COLORS.WHITE,
              width: {lg:650,xs:"100%"},
              fontFamily: roboto.style,
            }}
          >
            Explore Our Recent Sucessfull Work
          </Typography>
          <Stack direction={"row"} alignItems="center" spacing={2}>
            <Button
              sx={{
                border: "1px solid #fff",
                ":hover": {
                  backgroundColor: COLORS.HOVERCOLOR,
                },
              }}
              onClick={slidePrev}
            >
              <ArrowBackIos sx={{ color: COLORS.LIGHTBLUE }} />
            </Button>
            <Button
              sx={{
                border: "1px solid #fff",
                ":hover": {
                  backgroundColor: COLORS.HOVERCOLOR,
                },
              }}
              onClick={slideNext}
            >
              <ArrowForwardIos sx={{ color: COLORS.LIGHTBLUE }} />
            </Button>
          </Stack>
        </Stack>
        <Swiper
          ref={sliderRef}
          loop
          modules={[Autoplay]}
          autoplay={{
            delay: 20000,
          }}
        >
          {data.projects.map((val, i) => (
            <SwiperSlide key={i}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { lg: "100vh", xs: "40vh" },
                  mt: -5,
                }}
              >
                {/* Background Video */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                  }}
                >
                  <source src={val.video} type="video/mp4" />
                  Your browser does not support HTML video.
                </video>

                <Box
                  sx={{
                    position: "absolute",
                    textAlign: "center",
                    color: "white",
                    zIndex: 1,
                    width: "100%",
                    height: { lg: "100vh", xs: "40vh" },
                  }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      backgroundColor: COLORS.OVERLAY_BLACK,
                    }}
                  >
                    <Container maxWidth="lg">
                      <Grid2 container>
                        <Grid2
                          size={{ lg: 5, xs: 12, sm: 8 }}
                          sx={{ textAlign: "start" }}
                          className="animate__animated animate__backInLeft "
                        >
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                          >
                            <Typography
                              sx={{
                                color: COLORS.TRANSPARENT,
                                fontFamily: roboto.style,
                                fontSize: { lg: 45, xs: 18 },
                                textAlign: "start",
                                lineHeight: 1.5,
                                fontWeight: 700,
                                letterSpacing: 3,
                                WebkitTextStroke: `2px ${COLORS.LIGHTBLUE}`,
                                textTransform: "capitalize",
                              }}
                            >
                              {val.heading}
                            </Typography>
                          </Stack>

                          <Typography
                            sx={{
                              mt: 2,
                              color: COLORS.WHITE,
                              fontFamily: inter.style,
                            }}
                          >
                            {val.description}
                          </Typography>
                        </Grid2>
                      </Grid2>
                    </Container>
                  </Box>
                </Box>

                {/* <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 7000 }}
                loop
                className="mySwiper"
                style={{ height: "100%" }}
              >
                {data.heroSection.map((val) => (
                  <SwiperSlide>
                    <Box
                      sx={{
                        position: "absolute",
                        textAlign: "center",
                        color: "white",
                        zIndex: 1,
                        width: "100%",
                        height: { lg: "110vh", xs: "100vh" },
                      }}
                    >
                      <Box
                        sx={{
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          backgroundColor: COLORS.OVERLAY_BLACK,
                        }}
                      >
                        <Container maxWidth="lg">
                          <Grid2 container>
                            <Grid2
                              size={{ lg: 5, xs: 12, sm: 8 }}
                              sx={{ textAlign: "start" }}
                              className="animate__animated animate__backInLeft animate__delay-1s"
                            >
                              <Stack
                                direction="row"
                                alignItems="center"
                                spacing={2}
                              >
                                <Typography
                                  sx={{
                                    color: COLORS.TRANSPARENT,
                                    fontFamily: inter.style,
                                    fontSize: { lg: 45, xs: 25 },
                                    textAlign: "start",
                                    lineHeight: 1.5,
                                    fontWeight: 700,
                                    letterSpacing: 3,
                                    WebkitTextStroke: `2px ${COLORS.WHITE}`,
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {val.heading}
                                </Typography>
                                <Typography
                                  sx={{
                                    color: COLORS.PRIMARY,
                                    fontFamily: inter.style,
                                    fontSize: { lg: 45, xs: 25 },
                                    textAlign: "start",
                                    lineHeight: 1.5,
                                    fontWeight: 700,
                                    letterSpacing: 3,
                                    // WebkitTextStroke: `2px ${COLORS.WHITE}`,
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {val.heading2}
                                </Typography>
                              </Stack>
                              <Stack
                                direction="row"
                                alignItems="center"
                                spacing={2}
                              >
                                <Typography
                                  sx={{
                                    color: COLORS.TRANSPARENT,
                                    fontFamily: inter.style,
                                    fontSize: { lg: 45, xs: 25 },
                                    textAlign: "start",
                                    lineHeight: 1.5,
                                    fontWeight: 700,
                                    letterSpacing: 3,
                                    WebkitTextStroke: `2px ${COLORS.WHITE}`,
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {val.heading3}
                                </Typography>
                                <Typography
                                  sx={{
                                    color: COLORS.PRIMARY,
                                    fontFamily: inter.style,
                                    fontSize: { lg: 45, xs: 25 },
                                    textAlign: "start",
                                    lineHeight: 1.5,
                                    fontWeight: 700,
                                    letterSpacing: 3,
                                    // WebkitTextStroke: `2px ${COLORS.WHITE}`,
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {val.heading4}
                                </Typography>
                              </Stack>
                              <Typography
                                sx={{ mt: 2, color: COLORS.LIGHTGREY }}
                              >
                                {val.description}
                              </Typography>

                              <Button
                                sx={{
                                  mt: 3,
                                  color: COLORS.WHITE,
                                  border: `1px solid ${COLORS.PRIMARY}`,
                                  p: 1.4,
                                  borderRadius: 10,
                                  ":hover": {
                                    color: COLORS.BLACK,
                                    backgroundColor: COLORS.PRIMARY,
                                    ".icon_button": {
                                      transform: "translateX(8px)",
                                    },
                                  },
                                  ".icon_button": {
                                    transition: "0.5s ease all",
                                  },
                                  width: 250,
                                }}
                                endIcon={
                                  <ArrowForward
                                    className="icon_button"
                                    sx={{
                                      color: COLORS.WHITE,
                                      backgroundColor: COLORS.BLACK,
                                      p: 1,
                                      ":hover": {
                                        color: COLORS.WHITE,
                                        backgroundColor: COLORS.BLACK,
                                      },
                                      borderRadius: "50%",
                                    }}
                                  />
                                }
                                onClick={() => router.push("/contact")}
                              >
                                {val.button}
                              </Button>
                            </Grid2>
                          </Grid2>
                        </Container>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper> */}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        <Grid2 container mt={10}>
          {data.numbers.map((val, i) => (
            <Grid2 size={{lg:3,xs:6}} key={i} textAlign={"center"}>
              <Clients heading={val.heading} number={val.number} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default Projects;
