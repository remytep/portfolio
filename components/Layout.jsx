import React, { useEffect } from "react";

import { motion } from "framer-motion";

function Layout({ variant, className, children }) {
  return (
    <motion.main
      layout
      variants={variant}
      initial="hidden"
      animate="show"
      exit="exit"
      className={`${className}` + " w-full"}
    >
      {children}
    </motion.main>
  );
}

export default Layout;
