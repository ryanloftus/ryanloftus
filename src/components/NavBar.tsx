import React from "react";
import logo from "../images/icon.png";

type NavLinkProps = {
  sectionTitle: string;
};

const NavLink: React.FC<NavLinkProps> = ({ sectionTitle }) => (
  <a href={`#${sectionTitle}`} className="text-xl hover:text-primary hover:underline hover:underline-offset-3">{sectionTitle}</a>
);

export const NavBar: React.FC<{}> = () => (
  <nav className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl w-18 h-18" href="."><img className="w-10 h-10" src={logo} /></a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><NavLink sectionTitle="About"/></li>
        <li><NavLink sectionTitle="Contact"/></li>
        <li><NavLink sectionTitle="Projects"/></li>
        <li><NavLink sectionTitle="Writing"/></li>
      </ul>
    </div>
  </nav>
);

