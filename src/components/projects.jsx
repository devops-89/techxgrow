import { COLORS } from "@/utils/color";
import { roboto } from "@/utils/fonts";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Projects = () => {
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
              fontSize: 50,
              color: COLORS.WHITE,
              width: 650,
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
            >
              <ArrowForwardIos sx={{ color: COLORS.LIGHTBLUE }} />
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Projects;
