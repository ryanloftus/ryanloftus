import React from "react";

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

export const ContactSection: React.FC<{}> = () => (
  <>
    <h2 id="contact">Contact</h2>
    <ul>
      {
        socials.map((social) => {
          return (
            <li>
              <a className="hover:text-primary" href={social.url} target="_blank">
                {social.text}
                {social.text !== "Email" && <span className="material-symbols-outlined align-text-bottom text-sm ml-1">open_in_new</span>}
              </a>
            </li>
          )
        })
      }
    </ul>
  </>
);
