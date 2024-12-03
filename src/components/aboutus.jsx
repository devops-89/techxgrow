import { COLORS } from "@/utils/color";
import { inter, roboto } from "@/utils/fonts";
import { imageurls } from "@/utils/imageurls";
import { Box, Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AnimatedCursor from "react-animated-cursor";

const About = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.DARKBLUE, pt: 10, pb: 10 }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={5} alignItems={"center"}>
          <Grid2 size={6}>
            <Image
              src={imageurls.about}
              width={500}
              height={500}
              //   className="img-fluid"
            />
          </Grid2>
          <Grid2 size={6}>
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
