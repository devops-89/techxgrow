import { COLORS } from "@/utils/color";
import { roboto } from "@/utils/fonts";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const InfiniteMarquee = () => {
  const heading = [
    {
      label: "Retail",
    },
    {
      label: "Real Estate",
    },
    {
      label: "E-commerce",
    },
    {
      label: "Healthcare",
    },
    {
      label: "Automotive",
    },
    {
      label: "Architecture",
    },
    {
      label: "Financial",
    },
    {
      label: "Education",
    },
    {
      label: "Hotels",
    },
    {
      label: "Manufacturing ",
    },
  ];
  return (
    <Box sx={{ backgroundColor: COLORS.DARKBLUE }}>
      <Marquee speed={200}>
        {heading.map((val, i) => (
          <Stack direction={"row"} alignItems={"center"} spacing={2} mx={2}>
            <Typography
              sx={{
                fontSize: 100,
                fontFamily: roboto.style,
                WebkitTextStroke: `2px ${COLORS.LIGHTBLUE} `,
                color: "transparent",
                fontWeight: 500,
              }}
            >
              {val.label}
            </Typography>
            <Image
              src={
                "https://techxgrow-bucket.s3.eu-central-1.amazonaws.com/text-slide.png"
              }
              width={100}
              height={100}
            />
          </Stack>
        ))}
      </Marquee>
    </Box>
  );
};

export default InfiniteMarquee;