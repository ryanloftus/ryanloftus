import React from "react";

export type NavLinkProps = {
    text: string;
    sectionId: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ text, sectionId }) => (
    <a href={`#${sectionId}`} className="text-xl hover:text-primary hover:underline hover:underline-offset-3">{text}</a>
);