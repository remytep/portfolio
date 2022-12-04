import React, { useEffect } from "react";
import { data } from "../utils/data";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import Icon from "../components/utils/Icon";
import useTranslation from "next-translate/useTranslation";

// Variant
const projectVariant = {
  hidden: {
    y: "-100vh",
  },
  show: {
    y: 0,
    x: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 },
  },
  exit: {
    x: "100vw",
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 },
  },
};

function Project({ project }) {
  const { t, lang } = useTranslation("home");
  const { locale } = useRouter();
  const [firstMedia, ...leftMedia] = project.medias;
  console.log(leftMedia);
  const description =
    locale === "en" ? t(`${project.slug}_en`) : t(`${project.slug}_fr`);
  if (!project) return null;
  return (
    <Layout variant={projectVariant}>
      <motion.div className="flex flex-col relative">
        <motion.img
          key={`single-img-` + project.slug}
          className="object-cover object-center h-screen"
          alt={project.description}
          src={firstMedia.url}
        />
        <div className="z-10">
          <div className="flex flex-col py-10 mx-2 md:mx-6 lg:mx-10">
            <h1 className="text-6xl lg:text-8xl font-SeawaveAlt text-center">
              {project.title}
            </h1>
            <div className="flex justify-center flex-1">
              {project.stack.map((lang) => (
                <svg
                  key={lang}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  height="64"
                  width="64"
                  fill="currentColor"
                  className="stacksvg p-1"
                >
                  <Icon language={lang} />
                </svg>
              ))}
            </div>
            <div className="text-2xl lg:text-4xl text-justify flex-1 sm:container">
              {description}
            </div>
            <Link
              href={project.link}
              scroll={false}
              className="text-2xl lg:text-4xl text-center underline"
            >
              {t("more")}
            </Link>
          </div>
        </div>
        {leftMedia.map((image, index) => (
          <img
            key={index}
            className="object-cover object-center"
            alt={project.description}
            src={image.url}
          />
        ))}
      </motion.div>
    </Layout>
  );
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
