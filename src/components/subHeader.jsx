import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { COLORS } from "@/utils/color";
import {
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Mail,
  X,
} from "@mui/icons-material";
import { inter } from "@/utils/fonts";
const SubHeader = () => {
  const socialIcons = [
    {
      icon: <Facebook fontSize="small" />,
    },
    {
      icon: <X fontSize="small" />,
    },
    {
      icon: <LinkedIn fontSize="small" />,
    },
    {
      icon: <Instagram fontSize="small" />,
    },
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        pt: 1,
        pb: 1,
        width: "100%",
        borderBottom: "1px solid #fff",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <LocationOn htmlColor={COLORS.WHITE} fontSize="small" />
              <Typography
                sx={{
                  fontSize: 14,
                  color: COLORS.WHITE,
                  fontFamily: inter.style,
                }}
              >
                California, TX 70240
              </Typography>
            </Stack>
            <Divider
              flexItem
              orientation="vertical"
              sx={{ borderColor: COLORS.WHITE }}
            />
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Mail htmlColor={COLORS.WHITE} fontSize="small" />
              <Typography
                sx={{
                  fontSize: 14,
                  color: COLORS.WHITE,
                  fontFamily: inter.style,
                }}
              >
                Info@gmail.com
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems={"center"} spacing={1}>
            {socialIcons.map((val, i) => (
              <IconButton sx={{ color: COLORS.WHITE }}>{val.icon}</IconButton>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default SubHeader;
