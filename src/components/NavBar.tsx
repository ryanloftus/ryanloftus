import React from "react";
import logo from "../images/icon.png";

type NavLinkProps = {
  text: string;
  sectionId: string;
};

const NavLink: React.FC<NavLinkProps> = ({ text, sectionId }) => (
  <a href={`#${sectionId}`} className="text-xl hover:text-primary hover:underline hover:underline-offset-3">{text}</a>
);

export const NavBar: React.FC<{}> = () => (
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
);

