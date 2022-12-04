import React from "react";
import About from "../components/About";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";
// Variant
const aboutVariant = {
  hidden: {
    y: "100%",
  },
  show: {
    y: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 },
  },
  exit: {
    y: "100%",
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 },
  },
};

function AboutPage() {
  return (
    <Layout variant={aboutVariant} className="h-screen">
      <About apkey={"about"} />
    </Layout>
  );
}

export default AboutPage;
