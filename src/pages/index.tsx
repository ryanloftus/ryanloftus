import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { WritingSection } from "../components/WritingSection";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { RadialGradient } from "../components/RadialGradient";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={{fontFamily: 'Inter, sans-serif'}}>
      <center className="pt-10">
        <article className="text-left max-w-screen-md p-8">
          <h1 className="text-6xl font-semibold">Ryan Loftus</h1>
          <AboutSection />
          <ContactSection />
          <ProjectsSection />
        </article>
      </center>
      <RadialGradient />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Ryan Loftus</title>
    <meta name="description" content="Ryan Loftus is a Computer Science student at the University of Waterloo and a Software Engineer." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300" rel="stylesheet" />
  </>
);
