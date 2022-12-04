import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import ProjectsList from "../components/ProjectList";
import About from "../components/About";
// Variant
const homeVariant = {
  hidden: {
    y: "100vh",
  },
  show: {
    y: 0,
    x: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: [0.4, 0.01, -0.05, 0.6], duration: 1 },
  },
};

export default function Home() {
  return (
    <Layout variant={homeVariant}>
      <ProjectsList />
      <About apkey={"home"} />
    </Layout>
  );
}
