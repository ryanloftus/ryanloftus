import React, { useRef, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { WritingSection } from "../components/WritingSection";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

const IndexPage: React.FC<PageProps> = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  window.addEventListener("mousemove", (e: MouseEvent) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  });

  return (
    <main>
      <center className="pt-10 z-10">
        <article className="text-left max-w-screen-md p-8">
          <h1 className="text-6xl font-semibold">Ryan Loftus</h1>
          <AboutSection />
          <ContactSection />
          <ProjectsSection />
        </article>
      </center>
      <div
        className="z-0 pointer-events-none fixed"
        style={{ top: `0px`, left: `0px`, width: "100vw", height: "100vh", background: `radial-gradient(600px at ${cursorX}px ${cursorY}px, rgba(29, 78, 216, 0.20), transparent 80%)` }}
      />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Ryan Loftus</title>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300" rel="stylesheet" />
  </>
);
