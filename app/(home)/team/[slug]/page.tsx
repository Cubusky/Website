import { TeamMemberProfile } from "@/components/team_member/team_member";
import { teamLoader } from "@/lib/source";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const teamMember = teamLoader.getPage([params.slug]);

  if (!teamMember) notFound();

  return (
    <>
      <span className="mt-16"></span>
      <TeamMemberProfile teamMember={teamMember.data} />
    </>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return teamLoader.getPages().map((teamMember) => ({
    slug: teamMember.slugs[0],
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const teamMember = teamLoader.getPage([params.slug]);

  if (!teamMember) notFound();

  return {
    title: teamMember.data.title,
    description: teamMember.data.description,
  };
}
