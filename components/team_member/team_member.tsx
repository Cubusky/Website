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
    <div className="container md:px-8">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 md:pr-8 lg:pr-8 md:col-span-1 lg:col-span-1">
          <SiteImage
            src={teamMember.image}
            alt={teamMember.title}
            className="border-[--color-fd-border] border-4 rounded-full overflow-hidden"
          />
        </div>
        <div className="col-span-3 place-self-start">
          <h1 className="mb-2 text-3xl font-bold">
            <Emphasized>{teamMember.title}</Emphasized>
          </h1>
          <p className="mb-4 text-fd-muted-foreground">
            {teamMember.description}
          </p>
          {teamMember.expertise && (
            <div className="mb-4 flex flex-wrap gap-2">
              {teamMember.expertise.map((expertise) => (
                <span
                  key={expertise}
                  className="inline-flex items-center rounded-full border border-fd-border bg-fd-muted px-3 py-1 text-sm"
                >
                  {expertise}
                </span>
              ))}
            </div>
          )}
          <Socials teamMember={teamMember} className="mb-4" />
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
        relative max-h-74
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