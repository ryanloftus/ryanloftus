import React from "react";

export type Work = {
  title: string;
  url: string;
  imageSrc?: string;
  imageAltText?: string;
  description: string;
  technologies?: string[];
};

export const WorkTile: React.FC<{work: Work}> = ({work}) => {
  return (
    <a href={work.url} target="_blank" className="card col-span-1 p-0 m-0 h-92 hover:brightness-125 hover:text-primary no-underline shadow-md">
      {
        work.imageSrc ?
          <figure className="m-0 brightness-90">
            <img className="w-full h-32 object-cover" src={work.imageSrc} alt={work.imageAltText}/>
          </figure> :
          <center className="m-0 h-32"><p className="text-6xl mt-8 text-base-content">...</p></center>
      }
      <div className="card-body p-2">
        <div className="flex-grow">
          <h3 className="m-1">{work.title}</h3>
          <p className="card-text mx-1 mb-2 text-base-content font-light text-sm brightness-75">{work.description}</p>
        </div>
        <div className="card-actions mx-1 mb-2">
          {
            work.technologies && work.technologies.map((technology) => (
              <span className="m-0 badge badge-ghost text-xs">{technology}</span>
            ))
          }
        </div>
      </div>
    </a>
  );
};