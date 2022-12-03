import React from "react";
import About from "../components/About";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";
// Variant
const aboutVariant = {
  hidden: {
    x: "100vw",
  },
  show: {
    x: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: -2 },
  },
  exit: {
    x: "100vw",
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 },
  },
};

function AboutPage() {
  return (
    <Layout variant={aboutVariant}>
      <About apkey={"about"} />
    </Layout>
  );
}

export default AboutPage;
