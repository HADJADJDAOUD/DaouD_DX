import React from "react";
import { LinkPreview } from "./ui/link-preview";
import { projects } from "../data";
import { AnimatedTooltip } from "./ui/animated-tooltip";

import { CardBody, CardItem, CardContainer } from "./ui/3d-card";
export default function RecentProjects() {
  return (
    <div className="py-20 relative" id="projects">
      <div className="heading relative ">
        <h1 className="   text-white-100 ">A small selection of</h1>

        <span className="text-purple-500 "> Recent projects</span>
      </div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((project, key) => (
          <CardContainer key={project.id} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm z-40 relative max-w-sm mt-2 dark:text-neutral-300"
              >
                <LinkPreview
                  url={project.link}
                  className="font-bold z-40 relative  "
                >
                  clik here{" "}
                </LinkPreview>{" "}
                to get the source code
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={project.img}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center flex-col mt-20">
                <CardItem
                  translateZ={20}
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  {project.des}
                </CardItem>
                <CardItem
                  translateZ={20}
                  className="px-4 py-2 rounded-xl block text-xs font-normal  dark:text-white"
                >
                  <AnimatedTooltip items={project.people} />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
