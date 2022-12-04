import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { data } from "../utils/data";

// Variant

function ProjectsList() {
  const router = useRouter();
  /*   const handleRouteChange = (newRoute) => {
    router.push(
      {
        pathname: `/${newRoute}`,
        query: {
          slug: newRoute,
          locale: router.locale,
        },
      },
      `/${newRoute}`
    );
  }; */
  return (
    <article className="flex flex-col" id="projects">
      {data.map((project) => (
        <section key={project.slug} className="h-screen mobile-screen relative">
          <Link
            href={
              ({
                pathname: `/${project.slug}`,
                query: {
                  slug: project.slug,
                  locale: router.locale,
                },
              },
              `/${project.slug}`)
            }
            /*   onClick={(e) => handleRouteChange(project.slug)} */
            scroll={false}
          >
            <Image
              src={project.cover}
              alt={project.description}
              priority
              fill
              className="object-cover object-center"
            />
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-SeawaveAlt text-center text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl backdrop-blur-sm backdrop-grayscale bloc p-2">
              {project.title}
            </span>
          </Link>
        </section>
      ))}
    </article>
  );
}

export default ProjectsList;
