import React from "react";

export const Subheading: React.FC<{text: string}> = ({text}) => (
  <center>
    <h2 className="text-3xl font-semibold mt-48 mb-16" id={text}>{text}</h2>
  </center>
);
