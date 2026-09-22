import { NavbarLink } from "fumadocs-ui/layouts/home/navbar";
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
    // Rendered directly instead of a 'githubUrl' icon link, which fumadocs always hides behind the overflow menu.
    // `secondary: true` places it in the right-hand group next to the search bar.
    {
      type: "custom",
      secondary: true,
      children: (
        <NavbarLink
          item={{ url: "https://github.com/Cubusky/", external: true }}
          variant="icon"
          aria-label="GitHub"
          className="-me-1.5"
        >
          <FaGithub className="size-4" />
        </NavbarLink>
      ),
    },
  ],
};
