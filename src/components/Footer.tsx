import React from "react";

const FooterLink: React.FC<{url: string, text: string}> = ({url, text}) => (
  <a href={url} target="_blank" className="underline hover:text-primary">{text}</a>
);

export const Footer: React.FC<{}> = () => (
  <footer>
    <div className="flex justify-center items-center mt-8 text-base-content">
      <p>
        Built with <FooterLink url="https://www.gatsbyjs.com/" text="Gatsby" 
        />, <FooterLink url="https://www.reactjs.org/" text="ReactJS" 
        />, <FooterLink url="https://www.typescriptlang.org/" text="TypeScript" 
        />, <FooterLink url="https://www.tailwindcss.com/" text="Tailwind CSS" 
        />, and <FooterLink url="https://www.daisyui.com/" text="DaisyUI" />.
      </p>
    </div>
    <div className="flex justify-center items-center mt-4 mb-8 text-base-content">
      <p>
        &copy; Ryan Loftus 2024
      </p>
    </div>
  </footer>
);