import {
  blogCollection,
  docsCollection,
  pagesCollection,
  teamCollection,
} from "@/.source/server";
import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";

// `loader()` also assign a URL to your pages
// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const docsLoader = loader({
  baseUrl: "/docs",
  source: docsCollection.toFumadocsSource(),
});

export const blogLoader = loader({
  baseUrl: "/blog",
  source: toFumadocsSource(blogCollection, []),
});

export const teamLoader = loader({
  baseUrl: "/team",
  source: toFumadocsSource(teamCollection, []),
});

export const pagesLoader = loader({
  baseUrl: "/", // be careful not to override used root url's with pages content
  source: toFumadocsSource(pagesCollection, []),
});

/*
export const jsonLoader = loader({
  baseUrl: "/some-type",
  source: {
    files: jsonCollection.map(
      (entry) =>
        ({
          type: "meta",
          path: `${entry.name.toLowerCase().replace(/\s+/g, "-")}.json`,
          data: entry,
          slugs: [entry.name.toLowerCase().replace(/\s+/g, "-")],
        } as VirtualFile)
    ),
  },
});
*/
