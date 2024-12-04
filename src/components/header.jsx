import { data } from "@/assests/data";
import { COLORS } from "@/utils/color";
import { roboto } from "@/utils/fonts";
import { imageurls } from "@/utils/imageurls";
import { Close, Menu, Phone } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Header = () => {
  const router = useRouter();

  const phone = useMediaQuery("(max-width:600px)");

  const [open, setOpen] = useState(false);

  const changeRouter = (id) => {
    router.push(id);
    setOpen(false);
  };

  return (
    <Box sx={{ position: "absolute", width: "100%", top: { lg: 2, xs: 3 } }}>
      <Container maxWidth="lg" sx={{ pt: 1, pb: 1 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Image src={imageurls.logo_white} width={80} height={30} alt="" />

          {!phone ? (
            <>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                {data.navLinks.map((val, i) => (
                  <Link href={val.id} className="link">
                    <Typography
                      fontSize={14}
                      fontFamily={roboto.style}
                      key={i}
                      color={COLORS.WHITE}
                    >
                      {val.label}
                    </Typography>
                  </Link>
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
            </>
          ) : (
            <IconButton onClick={() => setOpen(true)}>
              <Menu htmlColor={COLORS.WHITE} />
            </IconButton>
          )}
        </Stack>
        <Drawer
          open={open}
          anchor="right"
          onClose={() => setOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: "100%",
              backgroundColor: COLORS.BLACK,
              color: COLORS.WHITE,
            },
          }}
        >
          <Box sx={{ textAlign: "end", mt: 4, pr: 4 }}>
            <IconButton onClick={() => setOpen(false)}>
              <Close htmlColor={COLORS.WHITE} sx={{ fontSize: 30 }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <List>
              {data.navLinks.map((val, i) => (
                <ListItemButton key={i} onClick={() => changeRouter(val.id)}>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontSize: 28, letterSpacing: 2 }}>
                        {val.label}
                      </Typography>
                    }
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Drawer>
      </Container>
    </Box>
  );
};

export default Header;
