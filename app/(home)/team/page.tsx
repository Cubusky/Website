import CubuskyContainer from "@/components/cubusky_container/cubusky_container";
import Emphasized from "@/components/emphasized/emphasized";
import SiteFooter from "@/components/site_footer/site_footer";
import { TeamMemberCard } from "@/components/team_member/team_member";
import { TeamCategory, TeamMemberWithUrl } from "@/lib/schemas";
import { teamLoader } from "@/lib/source";
import { JSX } from "react";

export default function Home(): JSX.Element {
  const teamMembers = teamLoader.getPages().map((teamMember) => ({
    ...teamMember.data,
    url: teamMember.url,
  })) as TeamMemberWithUrl[];

  return (
    <>
      <CubuskyContainer className="mt-8 px-8 h-full grow mb-16">
        <>
          <p className="text-fd-muted-foreground">Meet the </p>
          <h1 className="text-4xl font-bold mb-4">
            <Emphasized>Cubusky Team</Emphasized>
          </h1>

          <TeamSection
            title="Founders"
            category="admin"
            members={teamMembers}
          />
          {/* <TeamSection
            title="Community Moderators"
            category="mod"
            members={teamMembers}
          />
          <TeamSection
            title="Core Contributors"
            category="software"
            members={teamMembers}
          /> */}
        </>
      </CubuskyContainer>
      <SiteFooter />
    </>
  );
}

function TeamSection({
  title,
  category,
  members,
}: {
  title: string;
  category: TeamCategory;
  members: TeamMemberWithUrl[];
}): JSX.Element {
  return (
    <>
      <h2 className="text-3xl font-medium mb-4 mt-8 ml-4">{title}</h2>
      {members
        .filter((teamMember) => teamMember.category === category)
        .map((teamMember) => (
          <TeamMemberCard
            key={teamMember.author_id as string}
            teamMember={teamMember}
          />
        ))}
    </>
  );
}

