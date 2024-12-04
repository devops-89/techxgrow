import { COLORS } from "@/utils/color";
import { inter, roboto, syne } from "@/utils/fonts";
import { imageurls } from "@/utils/imageurls";
import {
  Box,
  Container,
  Grid2,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import RotatingCircle from "./rotatingCircle";

const About = () => {
  const router = useRouter();
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ backgroundColor: COLORS.DARKBLUE, pt: 10, pb: 10 }}>
      <Container maxWidth="lg">
        <Grid2 container>
          <Grid2 size={{ lg: 8, xs: 12 }} margin="auto">
            <Typography
              textAlign={"center"}
              sx={{
                fontSize: { lg: 70, xs: 40 },
                color: COLORS.TRANSPARENT,
                WebkitTextStroke: `2px ${COLORS.WHITE}`,
                fontFamily: syne.style,
              }}
            >
              We Are Complete Solution For Every Idea
            </Typography>
            <Typography
              textAlign={"center"}
              sx={{
                color: COLORS.GREY,
                mt: 2,
                fontFamily: syne.style,
                fontSize: 15,
              }}
            >
              We at TechXGrow are your one-stop shop for transforming concepts
              into useful solutions. With knowledge of a wide range of
              technologies, we lead you from idea to completion, enabling your
              vision with creative thinking, flawless execution, and
              unrivaled support.
            </Typography>
            <Box textAlign={"center"} mt={4} mb={4}>
              <IconButton
                onClick={() => router.push("#projects")}
                sx={{
                  position: "relative",
                  width: 150,
                  height: 150,
                  border: `1px solid ${COLORS.LIGHTBLUE}`,
                  overflow: "hidden",
                  backgroundColor: COLORS.TRANSPARENT,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-100%",
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: COLORS.HOVERCOLOR,
                    zIndex: 0,
                    transition: "top 0.5s ease-in-out",
                  },
                  "&:hover::before": {
                    top: 0,
                  },
                  "& .MuiTypography-root": {
                    position: "relative",
                    zIndex: 1,
                    color: COLORS.LIGHTBLUE,
                    transition: "color 0.5s ease-in-out",
                  },
                  "&:hover .MuiTypography-root": {
                    color: COLORS.WHITE,
                  },
                }}
              >
                <Typography fontSize={{ lg: 20, xs: 14 }}>
                  View Projects
                </Typography>
              </IconButton>
            </Box>
          </Grid2>
        </Grid2>

        <Grid2 container spacing={5} alignItems={"center"} mt={10}>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Image
              src={imageurls.about}
              width={phone ? 300 : 500}
              height={phone ? 300 : 500}
              //   className="img-fluid"
            />
          </Grid2>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Box
              sx={{
                border: `1px solid ${COLORS.LIGHTBLUE}`,
                width: 100,
                textAlign: "center",
                p: 1,
                borderRadius: 8,
              }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  color: COLORS.WHITE,
                  fontFamily: inter.style,
                }}
              >
                About us
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: 45,
                color: COLORS.WHITE,
                fontFamily: roboto.style,
                mt: 2,
              }}
            >
              The TechXGrow{" "}
              <Typography variant="span" sx={{ color: COLORS.LIGHTBLUE }}>
                Journey
              </Typography>{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontfamily: inter.style,
                color: COLORS.WHITE,
                mt: 2,
              }}
            >
              Transform, Innovate, Succeed – We use powerful technological
              solutions to rethink what is possible. Our knowledge connects
              innovation with sustainability, guaranteeing that companies not
              only expand but also take the lead in an environment that
              constantly evolves.
            </Typography>

            <Grid2 container>
              <Grid2 size={12}>
                <Typography
                  sx={{
                    fontSize: 30,
                    fontFamily: roboto.style,
                    color: COLORS.TRANSPARENT,
                    mt: 2,
                    WebkitTextStroke: `1px ${COLORS.LIGHTBLUE}`,
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontFamily: inter.style,
                    color: COLORS.WHITE,
                    mt: 2,
                    lineHeight: 1.8,
                  }}
                >
                  Our goal at TechXGrow is to use cutting-edge technology to
                  promote growth. We are committed to establishing a future in
                  which innovation propels achievement, enabling companies to
                  prosper in a constantly changing digital environment.
                </Typography>
                <Typography
                  sx={{
                    fontSize: 30,
                    fontFamily: roboto.style,
                    color: COLORS.TRANSPARENT,
                    mt: 2,
                    WebkitTextStroke: `1px ${COLORS.LIGHTBLUE}`,
                  }}
                >
                  Our Approach
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontFamily: inter.style,
                    color: COLORS.WHITE,
                    mt: 2,
                    lineHeight: 1.8,
                  }}
                >
                  Our approach is centred on understanding client needs,
                  delivering tailored technologies, and building long-term
                  value. By blending expertise with cutting-edge innovation, we
                  empower businesses to thrive in a rapidly evolving digital
                  landscape.
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default About;
