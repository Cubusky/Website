import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { FaGithub } from "react-icons/fa";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <div id="cubusky" />
        <div className="text-pop superpop">
          <span
            id="cubusky-text"
            className="text-xl text-[var(--logo-text)] font-semibold"
          >
            Cubusky
          </span>
        </div>
      </>
    ),
  },
  links: [
    // {
    //   text: "Blog",
    //   url: "/blog",
    // },
    // {
    //   text: "Team",
    //   url: "/team",
    // },
    {
      text: "About",
      url: "/about",
    },
    {
      text: "Licenses",
      url: "/license",
    },
    // `secondary: true` places it in the right-hand group next to the search bar (see global.css for keeping it visible at all widths).
    {
      type: "icon",
      url: "https://github.com/Cubusky/",
      external: true,
      icon: <FaGithub className="size-4" />,
      text: "GitHub",
      label: "GitHub",
      secondary: true,
    },
  ],
};
