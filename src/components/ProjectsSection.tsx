import React from "react";

import { Subheading } from "./Subheading";
import { WorkTile, Work } from "./WorkTile";
import civicSearchGeomentionsImage from "../images/civicsearch-geomentions.png";
import stockAnalysisImage from "../images/stock-analysis.png";
import pokemonOceanBlueImage from "../images/pokemon-oceanblue.png";
import socialMediaBackendImage from "../images/social-media-backend.png";
import algoVisualizerImage from "../images/algo-visualizer.png";
import pathTracerImage from "../images/path-tracer.png";
import microKernelImage from "../images/micro-kernel.png";

const projects: Work[] = [
  {
    title: "Micro-Kernel",
    url: "https://github.com/ryanloftus/micro-kernel",
    imageSrc: microKernelImage,
    imageAltText: "Kernel message-passing code written in C.",
    description: "A micro-kernel with I/O, a clock, and message passing. Built to support user tasks that control model trains.",
    technologies: ["C", "ARM"],
  },
  {
    title: "Path Tracer",
    url: "https://github.com/ryanloftus/path-tracer",
    imageSrc: pathTracerImage,
    imageAltText: "A cornell box image rendered using the path tracer. It has an area light that is reflected in the back wall, which is metal. One box is mirror-like and the other is glass.",
    description: "A path tracer with realistic metals and glass using microfacet models and Fresnel reflection.",
    technologies: ["C++"],
  },
  {
    title: "CivicSearch Geomentions",
    url: "https://medium.com/@ryanloftus02/finding-mentions-of-local-places-in-city-council-meetings-c3c6bd16ae42",
    imageSrc: civicSearchGeomentionsImage,
    imageAltText: "Map of Toronto showing locations mentioned in city council meetings, with hundreds of blue pins marking discussion points across the city.",
    description: "Maps of North American cities highlighting locations that are discussed by local government.",
    technologies: ["Python", "Spark", "SQLite", "Flask", "ReactJS"],
  },
  {
    title: "Social Media Backend",
    url: "https://github.com/ryanloftus/social-media-backend",
    imageSrc: socialMediaBackendImage,
    imageAltText: "TypeScript and TypeORM code for accessing posts from the database.",
    description: "A social media backend with user authentication, posts, likes, comments, chats, and follows.",
    technologies: ["TypeScript", "GraphQL", "Redis", "TypeORM"],
  },
  {
    title: "Algo Visualizer",
    url: "https://github.com/ryanloftus/algo-visualizer",
    imageSrc: algoVisualizerImage,
    imageAltText: "Screenshot of a browser-based sorting algorithm visualizer showing vertical bars representing an unsorted array, with Bubble Sort selected.",
    description: "Visualize popular sorting algorithms in your browser.",
    technologies: ["TypeScript", "ReactJS", "TailwindCSS"],
  },
  {
    title: "Stock Analysis Tool",
    url: "https://github.com/ryanloftus/stock-analysis",
    imageSrc: stockAnalysisImage,
    imageAltText: "A bar chart comparing analyst recommendations, like buy/sell/hold, from last month to this month for TSLA stock.",
    description: "Summary information, a chart of price over time, technical indicators, recommendation trends, and related news.",
    technologies: ["JavaScript", "HTML", "CSS"]
  },
  {
    title: "Pokemon OceanBlue",
    url: "https://github.com/Jake-L/PokemonOceanBlue",
    imageSrc: pokemonOceanBlueImage,
    imageAltText: "Screenshot of a Gameboy-style Pokemon game where the player is walking through Pewter City as it appears in Pokemon FireRed.",
    description: "A Pokemon game created in Java.",
    technologies: ["Java", "SQLite"],
  },
  {
    title: "More...",
    url: "https://github.com/ryanloftus?tab=repositories",
    description: "Check out more of my projects on GitHub.",
  }
]

export const ProjectsSection: React.FC<{}> = () => (
  <>
    <Subheading text="Projects" />
    <div className="grid grid-cols-3 gap-4">
      {
        projects.map((project) => <WorkTile work={project} />)
      }
    </div>
  </>
);
  