import React from "react";
import { Subheading } from "./Subheading";

export const AboutSection: React.FC<{}> = () => (
  <>
    <Subheading text="About" />
    <p className="font-light mb-2">
      I'm a software engineer passionate about learning new things and solving challenging problems.
    </p>
    <p className="font-light mb-2">
      I'm a Computer Science graduate from the University of Waterloo. I have previously interned at Bloomberg, Datamuse, Faire, and TD Bank.
    </p>
    <p className="font-light">
      In my free time, I play soccer, run, lift weights, read, and watch movies.
    </p>
  </>
);
