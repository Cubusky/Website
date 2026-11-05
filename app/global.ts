import { GithubCardProps } from "@/components/github_card/github_card";

export type SiteData = {
  url: string;
  logo: string;
  title: string;
  subtitle: string;
  description: string;
  previewImage: string;
  gtag: string;
  discord: DiscordData;
  github: GithubData;
  keywords: string[];
  footerLinks: FooterCategory[];
  githubPackages: GithubCardProps[];
  quotes: Quote[];
};

export type DiscordData = {
  serverId: string;
  inviteUrl: string;
  inviteCode: string;
  fallbackNumMembers: number;
  fallbackNumMembersOnline: number;
  image: string;
  title: string;
};

export type GithubData = {
  url: string;
  orgName: string;
  patEnvVar: string;
};

export type FooterLink = {
  url: string;
  title: string;
};

export type Quote = {
  text: string;
  person: string;
  link?: string;
};

export type FooterCategory = {
  title: string;
  links: FooterLink[];
};

export const site: SiteData = {
  url: "https://cubusky.com/",
  logo: "/img/cubusky/CubuskyLogo_cs.svg",
  title: "Cubusky",
  subtitle: "Tools for C# Game Development.",
  description: "Cubusky is a company primarily focused on tools for C# game development and consultancy.",
  previewImage: "/img/preview.png",
  gtag: "G-9WXTBSQCGL",
  discord: {
    serverId: "1547843030915092532",
    inviteUrl: "https://discord.gg/c979gvkHdb",
    inviteCode: "c979gvkHdb",
    fallbackNumMembersOnline: -1,
    fallbackNumMembers: -1,
    image: "/img/cubusky/CubuskyLogo_cs.svg",
    title: "🐾 Cubusky",
  },
  github: {
    url: "https://github.com/Cubusky/",
    orgName: "Cubusky",
    patEnvVar: "GH_BASIC",
  },
  keywords: [
    "software architecture",
    "architecture",
    "C#",
    "Unity",
    "Godot",
    "game design",
    "game engine",
    "indie game development",
    "open source",
    "programming language",
    "game development",
    "scripting",
    "cross-platform",
    "community support",
    "tutorials",
    "documentation",
    "help",
    "game engine",
    "2D game development",
    "3D game development",
    "game development tips",
    "game programming",
    "game publishing",
    "unity",
    "unity engine",
    "unity alternative",
    "Cubusky",
    "Chickensoft",
    "2dog",
    "twodog",
    "C# tools",
    "game development tools",
    "game development frameworks",
    "consultancy",
    "C# consultancy",
    "game development consultancy",
    "game development tools consultancy",
  ],
  footerLinks: [
    {
      title: "Cubusky",
      links: [
        // {
        //   url: "/blog",
        //   title: "Blog",
        // },
        // {
        //   url: "/team",
        //   title: "Team",
        // },
        {
          url: "/about",
          title: "About",
        },
        {
          url: "/licensing",
          title: "Licensing",
        },
      ],
    },
  ],
  githubPackages: [
    {
      owner: "cubusky",
      repo: "BuildingBlocks",
      logo: "/img/cubusky/placeholder.png",
    },
    {
      owner: "cubusky",
      repo: "Stats",
      logo: "/img/cubusky/placeholder.png",
    },
    {
      owner: "cubusky",
      repo: "Website",
      logo: "/img/cubusky/placeholder.png",
    }
  ],
  quotes: [
    {
      text: "Casey is like a steam train: once they get going, they're hard to stop.",
      person: "Fee van Brummelen"
    },
  ]
};
