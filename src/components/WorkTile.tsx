import React from "react";

export type Work = {
  title: string;
  url: string;
  imageUrl?: string;
  description: string;
};

export const WorkTile: React.FC<{work: Work}> = ({work}) => (
  <a href={work.url} target="_blank" className="card col-span-1 p-0 m-0 bg-neutral hover:brightness-110 hover:text-primary no-underline">
    {
      work.imageUrl ?
        <figure className="m-0 brightness-90"><img className="w-full h-32 object-cover" src={work.imageUrl}/></figure> :
        <center className="m-0 h-32"><p className="text-6xl mt-8 text-base-content">...</p></center>
    }
    <div className="card-body p-2">
      <h3 className="card-title m-1 underline">{work.title}</h3>
      <p className="card-text mx-1 mb-2 text-base-content">{work.description}</p>
    </div>
  </a>
);