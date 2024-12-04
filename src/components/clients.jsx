import { COLORS } from "@/utils/color";
import { syne } from "@/utils/fonts";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Clients = ({ number, heading }) => {
  return (
    <Box>
      <Typography
        sx={{
          color: COLORS.TRANSPARENT,
          WebkitTextStroke: `2px ${COLORS.LIGHTBLUE}`,
          fontSize: { lg: 60, xs: 30 },
          textAlign: "center",
        }}
      >
        {number}
      </Typography>
      <Typography
        sx={{
          fontSize: { lg: 30, xs: 15 },
          color: COLORS.WHITE,
          fontFamily: syne.style,
        }}
      >
        {heading}
      </Typography>
    </Box>
  );
};

export default Clients;
