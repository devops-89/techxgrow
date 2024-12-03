import { COLORS } from "@/utils/color";
import { inter, roboto } from "@/utils/fonts";
import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ServicesCard = ({ img, heading, description }) => {
  return (
    <div>
      <Card
        sx={{
          position: "relative",
          overflow: "hidden",
          border: `1px solid ${COLORS.HOVERCOLOR}`,
          p: 2,
          backgroundColor: COLORS.TRANSPARENT,
          height: 300,
          ":hover::before": {
            transform: "translateX(0)",
          },
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: COLORS.HOVERCOLOR,
            transform: "translateX(-100%)",
            transition: "transform 0.5s ease",
            zIndex: 0,
          },
        }}
      >
        <Image src={img} alt="" width={40} height={40} style={{ zIndex: 2, position: "relative" }} />
        <Box sx={{ mt: 5, position: "relative", zIndex: 2 }}>
          <Typography
            sx={{
              color: COLORS.WHITE,
              fontFamily: roboto.style,
              fontSize: 20,
              mt: 1,
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              color: COLORS.WHITE,
              fontFamily: inter.style,
              fontSize: 14,
              mt: 1,
            }}
          >
            {description}
          </Typography>
        </Box>
      </Card>
    </div>
  );
};

export default ServicesCard;
