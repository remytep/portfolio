import React, { useEffect } from "react";

import { motion } from "framer-motion";

function Layout({ variant, children }) {
  return (
    <motion.main variants={variant} initial="hidden" animate="show" exit="exit">
      {children}
    </motion.main>
  );
}

export default Layout;
