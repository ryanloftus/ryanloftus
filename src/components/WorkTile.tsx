import React from "react";

export type Work = {
  title: string;
  url: string;
  imageUrl: string;
  description: string;
};

export const WorkTile: React.FC<{work: Work}> = ({work}) => (
  <a href={work.url} target="_blank" className="card col-span-1 p-0 m-0 bg-neutral hover:brightness-110 hover:text-primary no-underline">
    <figure className="m-0 brightness-90"><img className="w-full h-32 object-cover" src={work.imageUrl}/></figure>
    <div className="card-body p-2">
      <h3 className="card-title m-1 underline">{work.title}</h3>
      <p className="card-text m-1 text-base-content">{work.description}</p>
    </div>
  </a>
);