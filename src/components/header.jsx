import { data } from "@/assests/data";
import { COLORS } from "@/utils/color";
import { roboto } from "@/utils/fonts";
import { imageurls } from "@/utils/imageurls";
import { Phone } from "@mui/icons-material";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <Box sx={{ position: "absolute", width: "100%", top: 60 }}>
      <Container maxWidth="lg" sx={{ pt: 1, pb: 1 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Image src={imageurls.logo_white} width={80} height={30} alt="" />
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            {data.navLinks.map((val, i) => (
              <Typography
                fontSize={14}
                fontFamily={roboto.style}
                key={i}
                color={COLORS.WHITE}
              >
                {val.label}
              </Typography>
            ))}
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Phone htmlColor={COLORS.WHITE} />
            <Divider
              flexItem
              orientation="vertical"
              sx={{ borderColor: COLORS.WHITE }}
            />
            <Box>
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: roboto.style,
                  color: COLORS.WHITE,
                }}
              >
                Call us today!
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: roboto.style,
                  color: COLORS.WHITE,
                }}
              >
                +91 8800291352
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
