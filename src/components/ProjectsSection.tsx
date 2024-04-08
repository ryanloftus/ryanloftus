import React from "react";

type Project = {
  name: string;
  url: string;
  imageUrl: string;
  subtitle: string;
};

const ProjectTile: React.FC<Project> = ({ name, url, imageUrl, subtitle }) => (
  <a href={url} target="_blank" className="card w-64 bg-neutral p-0 m-0 hover:brightness-110 no-underline">
    <figure className="m-0"><img src={imageUrl}/></figure>
    <div className="card-body p-2">
      <h3 className="card-title m-1 underline">{name}</h3>
      <p className="card-text p-0 m-1">{subtitle}</p>
    </div>
  </a>
);

const projects: Project[] = [
  {
    name: "Stock Analysis Tool",
    url: "https://ryanloftus.github.io/StockAnalysis/",
    imageUrl: "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1400-c100.jpg",
    subtitle: "A website that provides typical summary information, a graph of the stock's price over time, common technical indicators, recommendation trends, and related news."
  }
]

export const ProjectsSection: React.FC<{}> = () => (
  <>
    <h2 id="projects">Projects</h2>
    <div className="prose-invert">
      {
        projects.map((project) => (
          <ProjectTile name={project.name} url={project.url} imageUrl={project.imageUrl} subtitle={project.subtitle} />
        ))
      }
    </div>
  </>
);
  