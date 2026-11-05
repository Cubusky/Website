import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { FaHeart } from "react-icons/fa";

export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/Cubusky/",
  nav: {
    title: (
      <>
        <div id="cubusky-nav-logo" />
        <div className="text-pop superpop">
          <span
            id="cubusky-nav-text"
            className="hidden sm:inline text-xl text-(--logo-text) font-semibold"
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
    // {
    //   type: "custom",
    //   secondary: true,
    //   on: "nav",
    //   children: (
    //     <li>
    //       <button className="bg-fd-primary text-(--logo-text-shimmer) font-bold px-4 py-2 rounded inline-flex items-center gap-2">
    //         Donate <FaHeart aria-hidden />
    //       </button>
    //     </li>
    //   ),
    // },
  ],
};
