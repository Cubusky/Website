import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <div id="cubusky-container">
          <div id="cubusky-header">
            <div id="think-bubble" />
            <div id="cubusky" />
          </div>
        </div>
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
  githubUrl: "https://github.com/Cubusky/",
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
  ],
};
