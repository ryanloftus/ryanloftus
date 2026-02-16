import React from "react";
import { Subheading } from "./Subheading";

type ContactLink = {
  label: string;
  url: string;
  icon: string;
  external?: boolean;
};

const contactLinks: ContactLink[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/ryan-loftus-310455176/", icon: "work", external: true },
  { label: "GitHub", url: "https://github.com/ryanloftus", icon: "code", external: true },
  { label: "Email", url: "mailto:ryanloftus02@outlook.com", icon: "mail", external: false },
  { label: "Résumé", url: "./Resume.pdf", icon: "description", external: true },
];

export const AboutSection: React.FC<{}> = () => (
  <>
    <Subheading text="About" />
    <p className="font-light mb-2">
    I like learning and I like hard problems. Right now I'm trying to get better at AI tooling and integration, system design, building for scale, and big data and ETL. I work as a software engineer at Roblox. Before that I studied CS at Waterloo and did internships at Bloomberg, Datamuse, Faire, and TD Bank.
    </p>
    <p className="font-light mb-10">
      In my free time, I play soccer, run, lift weights, read, and watch movies.
    </p>
    <h3 className="text-lg font-semibold mb-3 text-slate-800">Get in touch</h3>
    <div className="flex flex-wrap gap-3" id="contact">
      {contactLinks.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2 py-3 px-4 rounded-lg border border-slate-200 text-slate-700 font-light
            hover:border-primary hover:text-primary hover:bg-slate-50/80 transition-colors"
        >
          <span className="material-symbols-outlined text-xl">{link.icon}</span>
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  </>
);
