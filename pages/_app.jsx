import "../styles/styles.scss";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "../components/CustomCursor";
import Preloader from "../components/Preloader";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function App({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);
  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <ThemeProvider key="theme" attribute="class">
          <Head>
            <title>REMY</title>
          </Head>
          <Navbar />
          <CustomCursor />
          <AnimatePresence
            mode="wait"
            onExitComplete={() => {
              if (typeof window !== "undefined") {
                window.scrollTo({ top: 0 });
              }
            }}
          >
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
          <Footer />
        </ThemeProvider>
      )}
      ;
    </AnimatePresence>
  );
}
