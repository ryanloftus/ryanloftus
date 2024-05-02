import React from "react";

export const Subheading: React.FC<{text: string}> = ({text}) => (
  <>
    <h2 className="text-3xl font-semibold" id={text}>{text}</h2>
  </>
);
