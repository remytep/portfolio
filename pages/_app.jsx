import "../styles/globals.scss";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function App({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {}, [loading]);
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
          <AnimatePresence
            mode="wait"
            onExitComplete={() => {
              if (typeof window !== "undefined") {
                window.scrollTo({ top: -1 });
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
