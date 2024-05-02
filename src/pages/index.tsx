import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { WritingSection } from "../components/WritingSection";
import { NavBar } from "../components/NavBar";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <NavBar />
      <center>
        <article className="text-left max-w-screen-md">
          <h1 className="text-6xl font-semibold">Ryan Loftus</h1>
          <AboutSection />
          <ContactSection />
          <ProjectsSection />
          <WritingSection />
        </article>
      </center>
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
