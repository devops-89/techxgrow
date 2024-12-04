import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ReactCurvedText from "react-curved-text";
import { ArrowForward } from "@mui/icons-material";
import { COLORS } from "@/utils/color";
import { syne } from "@/utils/fonts";

const RotatingCircle = () => {
  const textArray = [
    "Innovation",
    ".",
    "Transformation",
    ".",
    "Sustainability",
    // ".",
    // "Ageport",
    // ".",
    // "Ageport",
    // ".",
    // "Ageport",
    // ".",
    // "Ageport",
  ];

  return (
    <Box
      sx={{
        position: "relative",
        width: 250,
        height: 250,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        animation: "rotateCircle 10s linear infinite",
      }}
    >
      <ReactCurvedText
        width={180}
        height={180}
        cx={90}
        cy={90}
        rx={80}
        ry={80}
        startOffset={0}
        reversed={false}
        text={textArray.join(" ")} // Join the array of strings with spaces
        textProps={{
          style: {
            fontSize: 18,
            fill: COLORS.WHITE,
            fontFamily: syne.style,
          },
        }}
        textPathProps={null}
        tspanProps={null}
        ellipseProps={null}
        svgProps={{
          style: {
            // border: `1px solid ${COLORS.LIGHTBLUE}`,
            borderRadius: "50%",
            boxShadow: `0px 0px 2px 2px ${COLORS.HOVERCOLOR}`,
            backgroundColor: COLORS.DARKBLUE,
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 30,
          height: 30,
          background: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ArrowForward htmlColor={COLORS.WHITE} sx={{ fontSize: 40 }} />
      </Box>

      <style jsx global>{`
        @keyframes rotateCircle {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Box>
  );
};

export default RotatingCircle;
