import Emphasized from "@/components/emphasized/emphasized";
import SiteImage from "@/components/site_image/site_image";
import Card from "@/components/card/card";
import Socials from "@/components/socials/socials";
import { TeamMember, TeamMemberWithUrl } from "@/lib/schemas";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { JSX } from "react";

export function TeamMemberProfile({
  teamMember,
}: {
  teamMember: TeamMember;
}) : JSX.Element {
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 col-start-2 md:col-span-1 xl:row-span-2 self-center xl:self-auto">
          <SiteImage
            src={teamMember.image}
            alt={teamMember.title}
            className="border-[--color-fd-border] border-4 rounded-full overflow-hidden "
          />
        </div>

        <div className="col-span-4 md:col-span-3 self-center xl:place-self-start">
          <h1 className="mb-2 mt-8 text-3xl font-bold">
            <Emphasized>{teamMember.title}</Emphasized>
          </h1>
          <p className="text-fd-muted-foreground xl:text-start">
            {teamMember.description}
          </p>
          <Socials teamMember={teamMember} className="my-4 justify-center xl:justify-start" />
        </div>

        <div className="col-span-4 xl:col-start-2 xl:col-span-3 place-self-start">
          {teamMember.expertise && (
            <div className="mb-4 flex flex-wrap gap-2">
              {teamMember.expertise.map((expertise) => (
                <span
                  key={expertise}
                  className="pill"
                >
                  {expertise}
                </span>
              ))}
            </div>
          )}

          {teamMember.body && (
            <div className="prose min-w-0">
              <teamMember.body components={defaultMdxComponents} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function TeamMemberCard({
  teamMember,
}: {
  teamMember: TeamMemberWithUrl;
}): JSX.Element {
  return (
    <Card
      href={teamMember.url}
      className="
        relative
        xl:max-h-144
        xl:aspect-64/17
        lg:aspect-64/26
        md:aspect-64/34
        sm:aspect-64/60
        aspect-64/85
        hover:xl:aspect-64/34
        hover:lg:aspect-64/51
        hover:md:aspect-64/68
        hover:sm:aspect-64/102
        hover:aspect-64/160
        duration-333!
        after:content-['']
        after:pointer-events-none
        after:absolute after:inset-x-0 after:bottom-0
        after:h-20 after:z-10
        after:bg-linear-to-t after:from-fd-card after:to-transparent
      "
    >
      <TeamMemberProfile teamMember={teamMember} />
    </Card>
  );
}

        // md:max-h-80
        // lg:max-h-64
        // xl:max-h-80
        // 2xl:max-h-104
        // hover:lg:max-h-144