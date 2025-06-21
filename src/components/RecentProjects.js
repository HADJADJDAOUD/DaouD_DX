import React, { useState } from "react";
import { LinkPreview } from "./ui/link-preview";
import { projects } from "../data";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { CardBody, CardItem, CardContainer } from "./ui/3d-card";

export default function RecentProjects() {
  const [activeTab, setActiveTab] = useState("all");

  // Filter projects based on type
  const webProjects = projects.filter(project => project.type === "web" || !project.type);
  const aiProjects = projects.filter(project => project.type === "ai");
  const allProjects = projects;

  const getCurrentProjects = () => {
    switch(activeTab) {
      case "web": return webProjects;
      case "ai": return aiProjects;
      default: return allProjects;
    }
  };

  const getProjectTypeIndicator = (project) => {
    const type = project.type || "web";
    
    if (type === "ai") {
      return (
        <div className="absolute top-4 right-4 z-40 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1 animate-pulse">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          AI
        </div>
      );
    } else {
      return (
        <div className="absolute top-4 right-4 z-40 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
          </svg>
          WEB
        </div>
      );
    }
  };

  const getCardHoverColor = (project) => {
    const type = project.type || "web";
    return type === "ai" 
      ? "dark:hover:shadow-cyan-500/[0.1]" 
      : "dark:hover:shadow-emerald-500/[0.1]";
  };

  return (
    <div className="py-20 relative" id="projects">
      <div className="heading relative">
        <h1 className="text-white-100">A small selection of</h1>
        <span className="text-purple-500"> Recent projects</span>
      </div>

      {/* Enhanced Tab Navigation */}
      <div className="flex justify-center mt-10 mb-8">
        <div className="flex flex-wrap justify-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-1.5 border border-white/[0.1] shadow-2xl">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 m-0.5 ${
              activeTab === "all"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 scale-105"
                : "text-gray-400 hover:text-white hover:bg-white/5 hover:scale-102"
            }`}
          >
            <span className="flex items-center gap-1.5 sm:gap-2">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" />
              </svg>
              <span className="hidden sm:inline">All Projects</span>
              <span className="sm:hidden">All</span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-xs">
                {allProjects.length}
              </span>
            </span>
          </button>
          
          <button
            onClick={() => setActiveTab("web")}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 m-0.5 ${
              activeTab === "web"
                ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-emerald-500/25 scale-105"
                : "text-gray-400 hover:text-white hover:bg-white/5 hover:scale-102"
            }`}
          >
            <span className="flex items-center gap-1.5 sm:gap-2">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
              <span className="hidden sm:inline">Web Projects</span>
              <span className="sm:hidden">Web</span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-xs">
                {webProjects.length}
              </span>
            </span>
          </button>
          
          <button
            onClick={() => setActiveTab("ai")}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 m-0.5 ${
              activeTab === "ai"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 scale-105"
                : "text-gray-400 hover:text-white hover:bg-white/5 hover:scale-102"
            }`}
          >
            <span className="flex items-center gap-1.5 sm:gap-2">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="hidden sm:inline">AI Projects</span>
              <span className="sm:hidden">AI</span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-xs">
                {aiProjects.length}
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Projects Grid with Smooth Animation */}
      <div className="relative min-h-[400px]">
        {getCurrentProjects().length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.1] max-w-md">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2">No Projects Found</h3>
              <p className="text-gray-400 text-sm">
                {activeTab === "web" && "No web projects available at the moment."}
                {activeTab === "ai" && "No AI projects available at the moment."}
                {activeTab === "all" && "No projects available at the moment."}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center p-4 gap-16 transition-all duration-700 ease-in-out">
            {getCurrentProjects().map((project, key) => (
              <div 
                key={`${activeTab}-${project.id}`}
                className="animate-fadeIn"
                style={{ 
                  animationDelay: `${key * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <CardContainer className="inter-var relative">
                  <CardBody className={`bg-gray-50 relative group/card dark:hover:shadow-2xl ${getCardHoverColor(project)} dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border transition-all duration-300`}>
                    {/* Project Type Indicator */}
                    {getProjectTypeIndicator(project)}
                    
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
                        className="font-bold z-40 relative"
                      >
                        click here{" "}
                      </LinkPreview>{" "}
                      to get the source code
                    </CardItem>
                    
                    <CardItem translateZ="100" className="w-full mt-4">
                      <img
                        src={project.img}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-300"
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
                        className="px-4 py-2 rounded-xl block text-xs font-normal dark:text-white"
                      >
                        <AnimatedTooltip items={project.people} />
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Tab Indicator for Mobile */}
      <div className="flex justify-center mt-8 sm:hidden">
        <div className="flex space-x-3">
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTab === "all" ? "bg-purple-500 scale-125" : "bg-gray-600"}`}></div>
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTab === "web" ? "bg-emerald-500 scale-125" : "bg-gray-600"}`}></div>
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTab === "ai" ? "bg-cyan-500 scale-125" : "bg-gray-600"}`}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}