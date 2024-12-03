import { COLORS } from "@/utils/color";
import { inter, roboto, syne } from "@/utils/fonts";
import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import ServicesCard from "./servicesCard";
import { data } from "@/assests/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Services = () => {
  const sliderRef = useRef();

  const sliderNext = () => {
    sliderRef.current.swiper.slideNext();
  };
  const sliderPrev = () => {
    sliderRef.current.swiper.slidePrev();
  };
  return (
    <Box sx={{ backgroundColor: COLORS.DARKBLUE, pt: 10, pb: 10 }}>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            sx={{
              fontSize: 40,
              fontFamily: roboto.style,
              fontWeight: 800,
              width: 550,
              color: COLORS.WHITE,
              textTransform: "capitalize",
              mb:3
            }}
          >
            Our services cover a wide range of areas
          </Typography>
          {/* <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Button
              sx={{
                fontSize: 14,
                fontFamily: inter.style,
                border: "1px solid #ffffff",
                borderRadius: 0,
                color: COLORS.WHITE,
                width: 80,
              }}
              onClick={sliderPrev}
            >
              <ArrowBackIos />
            </Button>
            <Button
              sx={{
                fontSize: 14,
                fontFamily: inter.style,
                border: "1px solid #ffffff",
                borderRadius: 0,
                color: COLORS.WHITE,
                width: 80,
              }}
              onClick={sliderNext}
            >
              <ArrowForwardIos />
            </Button>
          </Stack> */}
        </Stack>
        <Grid2 container spacing={4}>
          {data.servicesCard.map((val, i) => (
            <Grid2 size={4}>
              <ServicesCard
                img={val.img}
                heading={val.heading}
                description={val.description}
              />
            </Grid2>
          ))}
        </Grid2>
        {/* <Box sx={{ mt: 4 }}>
          <Swiper
            breakpoints={{
              600: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            ref={sliderRef}
            loop
          >
            {data.servicesCard.map((val, i) => (
              <SwiperSlide key={i}>
                <ServicesCard
                  img={val.img}
                  heading={val.heading}
                  description={val.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box> */}
      </Container>
    </Box>
  );
};

export default Services;
