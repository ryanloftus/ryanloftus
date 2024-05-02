import React from "react";

import { Subheading } from "./Subheading";
import { WorkTile, Work } from "./WorkTile";

const projects: Work[] = [
  {
    title: "Stock Analysis Tool",
    url: "https://github.com/ryanloftus/stock-analysis",
    imageUrl: "https://github.com/ryanloftus/stock-analysis/assets/43321270/f88bef52-2acf-4c42-96cb-5976c12a12a5",
    description: "Summary information, a chart price over time, technical indicators, recommendation trends, and related news.",
  },
  {
    title: "Pokemon OceanBlue",
    url: "https://github.com/Jake-L/PokemonOceanBlue",
    imageUrl: "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1400-c100.jpg",
    description: "A Pokemon game created in Java.",
  },
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
  