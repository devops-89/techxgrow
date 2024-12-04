import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import SubHeader from "./subHeader";
import { IconButton } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import { COLORS } from "@/utils/color";

const Layout = ({ children }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* <SubHeader /> */}
      <Header />
      {children}
      <Footer />
      {/* Scroll Up Button */}
      {showScrollButton && (
        <IconButton
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor:COLORS.HOVERCOLOR,
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
          title="Scroll to top"
        >
          <ArrowUpward />
        </IconButton>
      )}
    </div>
  );
};

export default Layout;
