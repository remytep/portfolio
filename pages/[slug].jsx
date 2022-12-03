import React, { useEffect } from "react";
import { data } from "../utils/data";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import Icon from "../components/utils/Icon";
import useTranslation from "next-translate/useTranslation";

function Project({ project }) {
  const router = useRouter();
  const { t, lang } = useTranslation("home");
  const { locale } = useRouter();
  const description =
    locale === "en" ? t(`${project.slug}_en`) : t(`${project.slug}_fr`);

  if (!project) return null;
  return <Layout></Layout>;
}

export default Project;

export const getStaticPaths = async () => {
  const paths = data.map((project) => ({
    params: { slug: project.slug },
    locale: "en",
  }));
  paths.push(
    ...data.map((project) => ({
      params: { slug: project.slug },
      locale: "fr",
    }))
  );
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  if (!params) {
    throw new Error("No params");
  }
  const project = data.find((project) => project.slug === params.slug);
  return {
    props: { project },
  };
};
