import React from "react";

import { Subheading } from "./Subheading";

type Social = {
  text: string;
  url: string;
  icon?: string;
}

const socials: Social[] = [
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/ryan-loftus-310455176/",
  },
  {
    text: "GitHub",
    url: "https://github.com/ryanloftus",
  },
  // {
    //   text: "Instagram",
    //   url: "https://www.instagram.com/ryan.loftus10/"
    // },
  {
    text: "Email",
    url: "mailto:ryanloftus02@outlook.com",
  },
  {
    text: "Résumé",
    url: "../../Resume.pdf",
  },
];

export const ContactSection: React.FC<{}> = () => (
  <>
    <Subheading text="Contact" />
    <div className="grid grid-cols-4 gap-4">
      {
        socials.map((social) => {
          return (
            <div className="col-span-1 font-light">
              <a className="p-2 hover:text-primary" href={social.url} target="_blank">
                {social.text}
                <span className="material-symbols-outlined align-text-bottom text-sm ml-1">open_in_new</span>
              </a>
            </div>
          )
        })
      }
    </div>
  </>
);
