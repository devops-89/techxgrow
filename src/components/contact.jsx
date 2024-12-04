import { COLORS } from "@/utils/color";
import { inter, roboto, syne } from "@/utils/fonts";
import { loginWhiteTextField } from "@/utils/style";
import { LocationOn, Mail, Phone } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";

const Contact = () => {
  const contact = [
    {
      icon: <LocationOn htmlColor={COLORS.LIGHTBLUE} />,
      label: "Our Location",
      value: "lexima, NT 456678",
    },
    {
      icon: <Mail htmlColor={COLORS.LIGHTBLUE} />,
      label: "Send Us Mail",
      value: "Info@yourdomain.com",
    },
    {
      icon: <Phone htmlColor={COLORS.LIGHTBLUE} />,
      label: "Call Us",
      value: "+91 8800291352",
    },
  ];

  return (
    <Box sx={{ backgroundColor: COLORS.DARKBLUE, pb: 10 }}>
      <Box sx={{ mb: 10 }}>
        <Marquee speed={200}>
          {Array.from({ length: 12 }).map((_, i) => (
            <Stack
              key={i}
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ mx: 2 }} // Optional styling for spacing between elements
            >
              <Typography
                sx={{
                  fontSize: { lg: 50, xs: 20 },
                  color: COLORS.TRANSPARENT,
                  WebkitTextStroke: `2px ${COLORS.LIGHTBLUE}`,
                  fontFamily: syne.style,
                }}
              >
                Let's Work Together
              </Typography>
              <Typography sx={{ fontSize: { lg: 50, xs: 20 } }}>✌️</Typography>
            </Stack>
          ))}
        </Marquee>
      </Box>

      <Container maxWidth="lg">
        <Grid2 container spacing={8} alignItems={"start"}>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Typography
              sx={{
                fontSize: 30,
                fontFamily: roboto.style,
                color: COLORS.WHITE,
              }}
            >
              Need Help?
            </Typography>
            {/* <Typography
              sx={{
                fontSize: 15,
                fontFamily: inter.style,
                color: COLORS.WHITE,
                mt: 2,
              }}
            >
              Reach out to the world’s most reliable IT services.
            </Typography> */}
            <Grid2 container mt={3} spacing={3}>
              <Grid2 size={6}>
                <TextField
                  sx={{ ...loginWhiteTextField }}
                  label="Full Name*"
                  fullWidth
                />
              </Grid2>
              <Grid2 size={6}>
                <TextField
                  sx={{ ...loginWhiteTextField }}
                  label="Email*"
                  fullWidth
                />
              </Grid2>
              <Grid2 size={12}>
                <TextField
                  sx={{ ...loginWhiteTextField }}
                  label="Subject*"
                  fullWidth
                />
              </Grid2>
              <Grid2 size={{ lg: 11.7, xs: 11.3 }}>
                <TextareaAutosize
                  className={"textArea"}
                  minRows={10}
                  placeholder="Message"
                  id="message"
                />
              </Grid2>
              <Button
                sx={{
                  fontSize: 14,
                  fontFamily: roboto.style,
                  color: COLORS.WHITE,
                  border: `1px solid ${COLORS.LIGHTBLUE}`,
                  width: 200,
                  p: 1.5,
                }}
              >
                Send Message
              </Button>
            </Grid2>
          </Grid2>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Typography
              sx={{
                fontSize: 30,
                fontFamily: roboto.style,
                color: COLORS.WHITE,
                // WebkitTextStroke: `1px ${COLORS.LIGHTBLUE}`,
              }}
            >
              Innovation Begins Here
            </Typography>
            <Typography
              sx={{
                fontSize: 15,
                fontFamily: roboto.style,
                color: COLORS.WHITE,
              }}
            >
              Have questions or ideas? Reach out to us to explore how we can
              turn your vision into reality. Our team is ready to help you
              innovate, create, and succeed. Let’s start the conversation!
            </Typography>
            <List>
              {contact.map((val, i) => (
                <ListItem key={i}>
                  <ListItemAvatar>{val.icon}</ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontSize: 25,
                          color: COLORS.TRANSPARENT,
                          fontFamily: roboto.style,
                          WebkitTextStroke: `1px  ${COLORS.LIGHTBLUE}`,
                        }}
                      >
                        {val.label}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        sx={{
                          fontSize: 15,
                          color: COLORS.WHITE,
                          fontFamily: inter.style,
                        }}
                      >
                        {val.value}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Contact;
