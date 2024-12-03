import { COLORS } from "@/utils/color";
import { inter } from "@/utils/fonts";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Subheading = ({ heading, backgroundColor, color }) => {
  return (
    <div>
      <Stack direction={"row"} alignItems={"center"} spacing={1}>
        <Box
          sx={{
            backgroundColor: backgroundColor,
            width: 5,
            height: 5,
            borderRadius: "50%",
          }}
        ></Box>
        <Typography
          sx={{
            fontSize: 12,
            fontFamily: inter.style,
            fontWeight: 550,
            textTransform: "uppercase",
            color: color,
          }}
        >
          {heading}
        </Typography>
      </Stack>
    </div>
  );
};

export default Subheading;
