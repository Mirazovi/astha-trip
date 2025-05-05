
import Footer from "@/Components/homepage/Footer";
import Navbar from "@/Components/homepage/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
