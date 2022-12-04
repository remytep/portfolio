import React, { useState, useEffect } from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

// Variant
const navVariant = {
  hidden: {
    y: "-100%",
  },
  show: {
    y: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 0.5 },
  },
};

const Navbar = () => {
  const { t } = useTranslation("home");
  const { locale } = useRouter();
  return (
    <motion.header
      variants={navVariant}
      initial="hidden"
      animate="show"
      className="fixed top-0 left-0 z-10 px-4 py-2 lg:py-4 md:px-6 lg:px-10 w-screen bg-transparent flex font-SeawaveAlt text-4xl sm:text-5xl md:text-6xl lg:text-7xl justify-between"
    >
      <div className="flex-2">
        <Link
          href="/"
          locale={locale}
          scroll={false}
          className="mr-1 mix-blend-difference"
        >
          R.T
        </Link>
      </div>
      <Link
        href="/about"
        locale={locale}
        scroll={false}
        className="ml-1 mix-blend-difference"
      >
        {t("header_nav_aboutme")}
      </Link>
    </motion.header>
  );
};

export default Navbar;
