import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/Cubusky/",
  nav: {
    title: (
      <>
        <div id="cubusky-nav-logo" />
        <div className="text-pop superpop">
          <span
            id="cubusky-nav-text"
            className="text-xl text-(--logo-text) font-semibold"
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
      text: "Licensing",
      url: "/licensing",
    },
  ],
};
