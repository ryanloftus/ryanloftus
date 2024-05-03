import React from "react";
import { Subheading } from "./Subheading";

export const AboutSection: React.FC<{}> = () => (
  <>
    <Subheading text="About" />
    <p className="font-light">
      Hey, I'm Ryan. 
      I am studying Computer Science at the University of Waterloo and have previously interned at Datamuse, Faire, IGNIS Innovation, and TD Bank.
      I enjoy learning and solving challenging problems.
      I am interested in software engineering, data science, and AI.
    </p>
    <br />
    <a href="../../Resume.pdf" target="_blank" className="p-2 underline underline-offset-2 decoration-2 hover:text-primary">Resume<span className="material-symbols-outlined align-text-bottom text-sm ml-1">open_in_new</span></a>
  </>
);
