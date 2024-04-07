import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import logo from "../images/icon.png";
import { NavLink } from "../components/NavLink";

type Social = {
  text: string;
  url: string;
  icon?: string;
}

const socials: Social[] = [
  {
    text: "GitHub",
    url: "https://github.com/ryanloftus",
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/ryan-loftus-310455176/",
  },
  {
    text: "Email",
    url: "mailto:ryanloftus02@outlook.com",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl w-18 h-18" href="."><img className="w-10 h-10" src={logo} /></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink text="About" sectionId="about"/></li>
            <li><NavLink text="Contact" sectionId="contact"/></li>
            <li><NavLink text="Projects" sectionId="projects"/></li>
            <li><NavLink text="Writing" sectionId="writing"/></li>
          </ul>
        </div>
      </nav>
      <center>
        <article className="prose text-left">
          <h1>Ryan Loftus</h1>
          <h2 id="about">About</h2>
          <p>
            Hey, I'm Ryan. 
            I am studying Computer Science at the University of Waterloo and have previously interned at Datamuse, Faire, IGNIS Innovation, and TD Bank.
          </p>
          <h2 id="contact">Contact</h2>
          <ul>
            {
              socials.map((social) => {
                return (
                  <li>
                    <a href={social.url}>{social.text}</a>
                  </li>
                )
              })
            }
          </ul>
          <h2 id="projects">Projects</h2>
          <h2 id="writing">Writing</h2>
        </article>
      </center>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Ryan Loftus</title>;
