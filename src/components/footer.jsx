import { COLORS } from "@/utils/color";
import { inter, roboto, syne } from "@/utils/fonts";
import { imageurls } from "@/utils/imageurls";
import {
  Email,
  Grid3x3,
  Instagram,
  LinkedIn,
  Phone,
  X,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid2,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import RotatingCircle from "./rotatingCircle";
import { data } from "@/assests/data";
import { useRouter } from "next/router";
const Footer = () => {
  const socialIcons = [
    {
      icon: <FaFacebookF fontSize={18} />,
    },
    {
      icon: <X sx={{ fontSize: 20 }} />,
    },
    {
      icon: <Instagram sx={{ fontSize: 20 }} />,
    },
    {
      icon: <FaLinkedinIn fontSize={20} />,
    },
  ];

  const social = [
    {
      label: "Facebook",
    },
    {
      label: "Linkedin",
    },
    {
      label: "Instagram",
    },
  ];

  const router = useRouter();

  return (
    <Box sx={{ backgroundColor: COLORS.GREENCOLOR, height: "80vh" }}>
      <Box
        sx={{
          backgroundImage: `url(https://techxgrow-bucket.s3.eu-central-1.amazonaws.com/Footer_Image.jpg)`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Grid2 container alignItems={"center"}>
            <Grid2 size={{ lg: 7, xs: 12 }}>
              <Stack direction="row" alignItems={"center"} spacing={3}>
                {social.map((val, i) => (
                  <Button
                    sx={{
                      border: `2px solid ${COLORS.LIGHTBLUE}`,
                      borderRadius: 7,
                      p: 1.8,
                      width: 150,
                      color: COLORS.LIGHTBLUE,
                    }}
                    key={i}
                  >
                    {val.label}
                  </Button>
                ))}
              </Stack>
              <Box sx={{ mt: 5 }}>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontfamily: syne.style,
                    color: COLORS.WHITE,
                  }}
                >
                  We are in
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: 50, xs: 30 },
                    fontfamily: syne.style,
                    color: COLORS.WHITE,
                  }}
                >
                  In New York, USA
                </Typography>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontfamily: syne.style,
                    color: COLORS.WHITE,
                    mt: 5,
                  }}
                >
                  Drop us a line
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: 50, xs: 30 },
                    fontfamily: syne.style,
                    color: COLORS.WHITE,
                  }}
                >
                  hello@portnew.com
                </Typography>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1}
                  mt={4}
                >
                  {data.navLinks.map((val, i) => (
                    <Typography
                      sx={{
                        fontSize: { lg: 18, xs: 14 },
                        color: COLORS.WHITE,
                        fontFamily: syne.style,
                      }}
                      onClick={() => router.push(val.id)}
                    >
                      {val.label} {"  "} {i !== data.navLinks.length - 1 && "/"}
                    </Typography>
                  ))}
                </Stack>
                <Divider
                  sx={{ borderColor: COLORS.LIGHTBLUE, borderWidth: 1, mt: 2 }}
                />
                <Typography
                  sx={{
                    fontSize: 18,
                    color: COLORS.WHITE,
                    fontFamily: syne.style,
                    mt: 2,
                  }}
                >
                  © 2023 TechXGrow, All Right Reserved.
                </Typography>
              </Box>
            </Grid2>
            <Grid2 size={{ lg: 5, xs: 12 }}>
              <RotatingCircle />
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      {/* <Container
        maxWidth="lg"
        sx={{
          backgroundColor: COLORS.FOOTERCOLOR,
          p: 4,
          borderRadius: 4,
          height: "60vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Grid2 container spacing={2}>
            <Grid2 size={4}>
              <Image src={imageurls.logoWhite} width={200} height={40} />
              <Typography
                sx={{
                  fontSize: 14,
                  mt: 3,
                  color: COLORS.WHITE,
                  fontFamily: inter.style,
                }}
              >
                We believe in technology that doesn’t just solve today’s
                problems but prepares businesses for tomorrow. At TechXGrow, our
                solutions are crafted to foster long-term growth, efficiency,
                and sustainability, paving the way for future innovation.
              </Typography>
            </Grid2>

            <Grid2 size={4} textAlign={"center"}>
              <Typography
                sx={{
                  fontSize: 25,
                  fontFamily: roboto.style,
                  color: COLORS.LIGHTBLUE,
                }}
              >
                Follow us
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                mt={4}
                justifyContent={"center"}
              >
                {socialIcons.map((val, i) => (
                  <IconButton
                    sx={{
                      svg: {
                        color: COLORS.WHITE,
                      },
                      backgroundColor: COLORS.HOVERCOLOR,
                      width: 50,
                      height: 50,
                      ":hover": {
                        svg: {
                          color: COLORS.WHITE,
                        },
                        backgroundColor: COLORS.TRANSPARENT,
                      },
                      border: `1px solid ${COLORS.HOVERCOLOR}`,
                    }}
                    key={i}
                  >
                    {val.icon}
                  </IconButton>
                ))}
              </Stack>
            </Grid2>
            <Grid2 size={4}>
              <Typography
                sx={{
                  fontSize: 25,
                  fontFamily: roboto.style,
                  color: COLORS.LIGHTBLUE,
                  textAlign: "center",
                }}
              >
                Contact
              </Typography>

              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={1}
                mb={2}
                mt={2}
              >
                <Phone htmlColor={COLORS.WHITE} />
                <Typography
                  sx={{
                    fontSize: 17,
                    fontFamily: inter.style,
                    color: COLORS.WHITE,
                    textAlign: "center",
                  }}
                >
                 +91 8800291352
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={1}
              >
                <Email htmlColor={COLORS.WHITE} />
                <Typography
                  sx={{
                    fontSize: 17,
                    fontFamily: inter.style,
                    color: COLORS.WHITE,
                    textAlign: "center",
                  }}
                >
                  info@gmail.com
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
          <Divider sx={{ borderColor: COLORS.WHITE, mt: 2 }} />
          <Typography
            sx={{
              textAlign: "center",
              color: COLORS.WHITE,
              fontSize: 14,
              fontFamily: inter.style,
              mt: 3,
            }}
          >
            © 2023 TechXGrow. All Rights Reserved
          </Typography>
        </Box>
      </Container> */}
    </Box>
  );
};

export default Footer;
