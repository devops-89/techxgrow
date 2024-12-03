import React from "react";
import Header from "./header";
import Footer from "./footer";
import SubHeader from "./subHeader";

const Layout = ({ children }) => {
  return (
    <div>
      <SubHeader />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
