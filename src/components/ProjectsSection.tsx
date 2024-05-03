import React from "react";

import { Subheading } from "./Subheading";
import { WorkTile, Work } from "./WorkTile";
import civicSearchGeomentionsImage from "../images/civicsearch-geomentions.png";
import stockAnalysisImage from "../images/stock-analysis.png";
import pokemonOceanBlueImage from "../images/pokemon-oceanblue.png";
import socialMediaBackendImage from "../images/social-media-backend.png";
import algoVisualizerImage from "../images/algo-visualizer.png";

const projects: Work[] = [
  {
    title: "CivicSearch Geomentions",
    url: "https://medium.com/@ryanloftus02/finding-mentions-of-local-places-in-city-council-meetings-c3c6bd16ae42",
    imageSrc: civicSearchGeomentionsImage,
    description: "Maps of North American cities highlighting locations that are discussed by local government.",
    technologies: ["Python", "Spark", "SQLite", "Flask", "ReactJS"],
  },
  {
    title: "Social Media Backend",
    url: "https://github.com/ryanloftus/social-media-backend",
    imageSrc: socialMediaBackendImage,
    description: "A social media backend with user authentication, posts, likes, comments, chats, and follows.",
    technologies: ["TypeScript", "GraphQL", "Redis", "PostgreSQL", "TypeORM"],
  },
  {
    title: "Algo Visualizer",
    url: "https://gihub.com/ryanloftus/algo-visualizer",
    imageSrc: algoVisualizerImage,
    description: "Visualize popular sorting algorithms in your browser.",
    technologies: ["TypeScript", "ReactJS", "TailwindCSS"],
  },
  {
    title: "Stock Analysis Tool",
    url: "https://github.com/ryanloftus/stock-analysis",
    imageSrc: stockAnalysisImage,
    description: "Summary information, a chart price over time, technical indicators, recommendation trends, and related news.",
    technologies: ["JavaScript", "HTML", "CSS"]
  },
  {
    title: "Pokemon OceanBlue",
    url: "https://github.com/Jake-L/PokemonOceanBlue",
    imageSrc: pokemonOceanBlueImage,
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
  