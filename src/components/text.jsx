import { COLORS } from "@/utils/color";
import { syne } from "@/utils/fonts";
import { Typography } from "@mui/material";
import React from "react";

const Text = () => {
  return (
    <div>
      <Typography
        sx={{ color: COLORS.WHITE, fontSize: 12, fontFamily: syne.style }}
      >
        Digital Agency
      </Typography>
    </div>
  );
};

export default Text;
