import React from "react";

export const Title: React.FC<{}> = ({}) => (
  <div className="relative h-screen w-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-semibold" id="title">Hey, I'm Ryan</h1>
    </div>

    <div className="absolute text-center bottom-8 w-screen text-2xl animate-bounce opacity-70">
      <span className="border-slate-600 border-2 rounded-full px-2 py-1">↓</span>
    </div>
  </div>
);
