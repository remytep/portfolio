import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Button from "../utils/Button";

// Variant
const footerVariant = {
  hidden: {
    y: "100%",
  },
  show: {
    y: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 0.5 },
  },
};

function Footer() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const { locale, query } = useRouter();
  const slug = query.slug;
  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <Button
          onClick={() => setTheme("light")}
          className="mix-blend-difference"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
            />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button
          onClick={() => setTheme("dark")}
          className="mix-blend-difference"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            />
          </svg>
        </Button>
      );
    }
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <motion.footer
      variants={footerVariant}
      initial="hidden"
      animate="show"
      className="fixed bottom-0 left-0 z-10 px-4 py-2 lg:py-4 md:px-6 lg:px-10 flex justify-between items-center w-screen"
    >
      <div className="align-middle text-sm sm:text-md lg:text-lg">
        <Link
          href={slug ? slug : ""}
          locale="en"
          className={` ${
            locale === "en"
              ? "text-stone-900 dark:text-orange-100"
              : "text-gray-300 dark:text-gray-600"
          }`}
        >
          EN
        </Link>
        <span className="mx-1 text-lg lg:text-2xl">|</span>
        <Link
          href={slug ? slug : ""}
          locale="fr"
          className={`${
            locale === "fr"
              ? "text-stone-900 dark:text-orange-100"
              : "text-gray-300 dark:text-gray-600"
          }`}
        >
          FR
        </Link>
      </div>
      {renderThemeChanger()}
    </motion.footer>
  );
}

export default Footer;
