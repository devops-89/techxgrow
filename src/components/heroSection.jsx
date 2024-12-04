import { COLORS } from "@/utils/color";
import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import Subheading from "./subheading";
import { inter, roboto } from "@/utils/fonts";
import Image from "next/image";
import { imageurls } from "@/utils/imageurls";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "@/assests/data";
import { Autoplay } from "swiper/modules";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import AnimatedCursor from "react-animated-cursor";
import { useRouter } from "next/router";
const HeroSection = () => {
  const sliderRef = useRef();

  const nextSlide = () => {
    sliderRef.current.swiper.slideNext();
  };
  const prevSlide = () => {
    sliderRef.current.swiper.slidePrev();
  };

  const router = useRouter();

  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#ffffff",
        }}
        outerStyle={{
          border: "3px solid #ffffff",
        }}
      />
      <Box
        sx={{
          backgroundImage: `url(https://techxgrow-bucket.s3.eu-central-1.amazonaws.com/banners/banner1.jpg)`,
          height: { lg: "100vh", xs: "80vh" },
          pb: 1,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 4000,
            }}
            loop
            ref={sliderRef}
          >
            {data.heroSection.map((val, i) => (
              <SwiperSlide key={i}>
                <Container maxWidth="lg">
                  <Grid2 container alignItems={"center"} spacing={5}>
                    <Grid2
                      size={{ lg: 6, xs: 12 }}
                      className="animate__animated animate__fadeInLeftBig"
                    >
                      {/* <Subheading
                        heading={"Optimize IT Systems"}
                        backgroundColor={COLORS.WHITE}
                        color={COLORS.WHITE}
                      /> */}
                      <Typography
                        sx={{
                          fontSize: { lg: 50, xs: 40 },
                          fontFamily: roboto.style,
                          WebkitTextStroke: "2px  #ffffff",
                          color: "transparent",
                          fontWeight: 500,
                        }}
                      >
                        {val.heading1}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { lg: 50, xs: 40 },
                          fontFamily: roboto.style,
                          fontWeight: 500,
                          color: COLORS.WHITE,
                        }}
                      >
                        {val.heading2}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 14,
                          color: COLORS.WHITE,
                          fontFamily: inter.style,
                          fontWeight: 600,
                          lineHeight: 2,
                        }}
                      >
                        {val.description}
                      </Typography>
                      <Button
                        sx={{
                          backgroundColor: COLORS.WHITE,
                          mt: 3,
                          width: 200,
                          color: COLORS.BLACK,
                          p: 1.8,
                          borderRadius: 0,
                          ":hover": {
                            color: COLORS.WHITE,
                            border: "1px solid #fff",
                            backgroundColor: COLORS.TRANSPARENT,
                          },
                          border: "1px solid #000",
                          fontSize: 14,
                          fontFamily: roboto.style,
                          textTransform: "inherit",
                        }}
                        onClick={() => router.push("#contact")}
                      >
                        Start Now
                      </Button>
                    </Grid2>
                    {/* <Grid2
                      size={6}
                      className="animate__animated animate__fadeInRightBig"
                    >
                      <Image
                        src={val.img}
                        alt=""
                        width={500}
                        height={400}
                        className="img-fluid"
                      />
                    </Grid2> */}
                  </Grid2>
                </Container>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        {/* <Container maxWidth="lg">
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Button
              sx={{
                fontSize: 12,
                fontFamily: roboto.style,
                textTransform: "inherit",
                color: COLORS.BLACK,
              }}
              startIcon={<ArrowBackIos sx={{ fontSize: 12 }} />}
              onClick={prevSlide}
            >
              Prev slide
            </Button>
            <Button
              sx={{
                fontSize: 12,
                fontFamily: roboto.style,
                textTransform: "inherit",
                color: COLORS.BLACK,
              }}
              endIcon={<ArrowForwardIos sx={{ fontSize: 12 }} />}
              onClick={nextSlide}
            >
              Next slide
            </Button>
          </Stack>
        </Container> */}
      </Box>
    </div>
  );
};

export default HeroSection;
