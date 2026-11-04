import BlogPreview from "@/components/blog_preview/blog_preview";
import CubuskyContainer from "@/components/cubusky_container/cubusky_container";
import DiscordInvite from "@/components/discord_invite/discord_invite";
import Emphasized from "@/components/emphasized/emphasized";
import GithubCard from "@/components/github_card/github_card";
import SiteFooter from "@/components/site_footer/site_footer";
import ImageSlider from "@/components/image_slider/image_slider";
import { TeamMemberProfile, TeamMemberCard } from "@/components/team_member/team_member";
import ChickensoftHero from "@/public/img/creators/chickensoft.webp";
import TwoDog from "@/public/img/creators/2dog.svg";
import { getBlogs } from "@/utils/get_blogs";
import { teamLoader } from "@/lib/source";
import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { site } from "../global";

export default async function HomePage(): Promise<JSX.Element> {
  return (
    <main className="flex flex-1 flex-col justify-start text-center px-0 overflow-x-clip">
      <div className="flex flex-col w-full items-center justify-center"
        style={{
          paddingBottom: "calc(var(--spacing) * 6)",
          minHeight: "calc(100svh - calc(var(--spacing) * 6))",
        }}
      >
        <ImageSlider
          autoAdvanceIntervalSeconds={6.666}
          slides={[
            {
              src: "/img/splash/building_blocks.png",
              title: "Building Blocks",
              description: "Highly Performant Command Pattern for C#",
              style: { 
                backgroundImage: "url('/img/splash/building_blocks-small.jpg')",
              },
              status: "Download for Free",
              url: "https://github.com/Cubusky/BuildingBlocks",
            },
            {
              src: "/img/splash/dawn_blade.png",
              title: "RPG Stats",
              description: "Powerful Stats to start your Adventure",
              style: { 
                backgroundImage: "url('/img/splash/dawn_blade-small.jpg')",
              },
              status: "Download for Free",
              url: "https://github.com/Cubusky/Stats",
            },
            // {
            //   src: "/img/splash/wilderness.png",
            //   title: "Survival Stats",
            //   description: "Hunger, Thirst, and every other survival stat",
            //   style: { 
            //     backgroundImage: "url('/img/splash/wilderness-small.jpg')",
            //   },
            //   button: {
            //     text: "Buy Survival Stats",
            //     url: "/404",
            //   },
            // },
            {
              src: "/img/splash/elements.png",
              title: "Elements",
              description: "Enhance your stats with Elemental Prowess",
              style: { 
                backgroundImage: "url('/img/splash/elements-small.jpg')",
              },
              status: "Coming Soon"
            },
            // {
            //   src: "/img/splash/emotions.jpg",
            //   title: "Emotion Stats",
            //   description: "Stats to simulate love, pain and acceptance",
            //   button: {
            //     text: "Buy Emotion Stats",
            //     url: "/404",
            //   },
            // },
          ]}
        />
      </div>

      {/* <Hero
        content={
          <>
            <h1 className="title font-bold text-4xl xl:text-5xl text-pretty lg:text-start text-[var(--logo-text)]">
              {site.title}
            </h1>
            <DiscordInvite className="sm:mx-auto md:mx-auto lg:mx-0" />
            <p className="subtitle mt-4 font-light text-2xl lg:text-2xl xl:text-3xl max-w-lg text-center lg:text-start lg:whitespace-nowrap z-[1]">
              Open source tools for Godot and C#.
            </p>
          </>
        }
        graphic={
          <>
            <div className="relative w-full text-center">
              <SiteImage
                src="/img/hero.webp"
                alt={site.title}
                className="w-auto ml-[100px] lg:-ml-[40px] lg:max-h-[50vw]"
                loading="eager"
              />
            </div>
          </>
        }
      ></Hero> */}

      {/* These absolutely positioned containers fade the contents out into the background */}
      {/* <CubuskyContainer fade="both">
        <section className="py-4 px-4 border-t-1 border-b-1 border-[var(--color-fd-border)] flex flex-row justify-around items-center flex-wrap gap-6 md:gap-10 lg:gap-16 xl:gap-16 bg-[var(--color-fd-muted)]">
          {friends.map((friend) => (
            <Link
              href={friend.url}
              target="_blank"
              key={friend.url}
              className="superpop shrink -hue-rotate-20 dark:-hue-rotate-10"
            >
              <SiteImage
                src={friend.logo}
                alt={friend.name}
                className="
                  w-auto
                  max-h-[65px]
                  max-w-[130px]
                  flex flex-col justify-center items-center
                  invert sepia brightness-64
                  dark:brightness-40
                "
              />
            </Link>
          ))}
        </section>
      </CubuskyContainer> */}

      <CubuskyContainer preserve={true} className="relative">
        <CubuskyContainer fade={"both"}>
          <section className="mt-16 px-8 py-4 border-t border-b border-fd-border bg-fd-muted">
            <h1 className="text-2xl md:text-3xl lg:text-4xl">
              <Emphasized>Consult a Game Architect</Emphasized>
            </h1>
            <p className="text-lg mt-2">We provide expert guidance for your game development projects.</p>
          </section>
        </CubuskyContainer>

        <section className="grid grid-cols-1 gap-4 lg:gap-6 xl:gap-8 mt-16 mx-16">
          {teamLoader.getPages().map((teamMember) => (
            <TeamMemberCard 
              key={teamMember.slugs[0]} 
              teamMember={{...teamMember.data, url: teamMember.url}}>
            </TeamMemberCard>

            // <TeamMemberProfile
            //   key={teamMember.slugs[0]}
            //   teamMember={teamMember.data}
            // />
          ))}
        </section>

      </CubuskyContainer>

      {/* <CubuskyContainer preserve={true}>
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-16">
          What others have to say
        </h1>

        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6 mt-16 mx-8">
          {site.quotes.map((quote, index) => (
            <div key={index} className="flex flex-col">
              <Quote person={quote.person}>
                {quote.text}
              </Quote>
            </div>
          ))}
        </section>
      </CubuskyContainer> */}

      <CubuskyContainer preserve={true}>
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-16 mx-8">
          ...or check out our <Emphasized>Open Source Tools</Emphasized>
        </h1>

        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6 mt-16 mx-8">
          {site.githubPackages.map((pkg) => (
            <div
              className="flex flex-row items-stretch justify-center"
              key={pkg.owner + "/" + pkg.repo}
            >
              <div className="max-w-lg basis-0 grow h-full">
                <GithubCard {...pkg} className="my-0 min-w-full h-full" />
              </div>
            </div>
          ))}
        </section>
      </CubuskyContainer>

      <CubuskyContainer preserve={true}>
        <CubuskyContainer fade={"both"}>
          <section className="mt-16 py-4 border-t border-b border-fd-border bg-fd-muted">
            <h1 id="projects" className="text-2xl md:text-3xl lg:text-4xl">
              <Emphasized>Creators we Recommend</Emphasized>
            </h1>
          </section>
        </CubuskyContainer>

        {/* Chickensoft Tools Section */}
        <div className="grid grid-cols-12 mt-16 gap-4 lg:gap-14 lg:px-8 place-items-center mx-8">
          <div className="col-span-12 lg:col-span-5">
            <div className="max-w-lg mx-auto">
              <Image
                src={ChickensoftHero}
                alt="Chickensoft Tools"
                className="shadow-lg lg:min-w-full xlg:min-w-lg"
              />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <FeatureText>
              <p>
                <Emphasized>Chickensoft</Emphasized> is a volunteer organization dedicated to empowering game developers by building open source tools for the <Emphasized>C# programming language.</Emphasized>
              </p>
              <br />
              <p>
                We use Chickensoft tools in our own software and provide our expertise on these tools as consultants.
              </p>
              <br />
              <p>
                We also actively contribute to the open source community by maintaining and improving these tools for other developers. <EmphasizedLink href="https://chickensoft.games">Lay an Egg!</EmphasizedLink>
              </p>
            </FeatureText>
          </div>
        </div>

        <CubuskyContainer fade={"both"}>
          <hr />
        </CubuskyContainer>

        {/* 2Dog Section */}
        <div className="grid grid-cols-12 mt-16 gap-4 lg:gap-14 lg:px-8 place-items-center mx-8">
          <div className="col-span-12 lg:col-span-5 lg:order-2">
            <div className="max-w-lg mx-auto">
              <Image
                src={TwoDog}
                alt="2Dog"
                className="shadow-lg lg:min-w-full xlg:min-w-lg"
              />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:order-1">
            <FeatureText>
              <p>
                <Emphasized>2Dog</Emphasized> runs the Godot engine in .NET, teaching an old dog new tricks!
              </p>
              <br />
              <p>
                Export your game to the web, wrap it in desktop or mobile UI, and run Godot in your test runner and CI/CD pipeline.  
              </p>
              <br />
              <p>
                Not only is the creator highly skilled and knowledgeable, but they are also kind and willing to help. We use 2Dog in our own testing ecosystem and highly recommend their work. <EmphasizedLink href="https://2dog.dev">Go for Walks!</EmphasizedLink>
              </p>
            </FeatureText>
          </div>
        </div>
      </CubuskyContainer>

      {/* <ChickenContainer>
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-8 mt-24">
          <Emphasized>What we&apos;ve been up to</Emphasized>
        </h1>
        <RecentBlogs numBlogs={3} />
      </ChickenContainer> */}

      {/* <CubuskyContainer fade="both">
        <section className="mt-16 py-4 border-t border-b border-[var(--color-fd-border)] bg-[var(--color-fd-muted)]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">
            <Emphasized>Building the Future Together</Emphasized>
          </h1>
        </section>

        <div className="grid w-[100%] grid-cols-12 mt-2">
          <div className="order-2 lg:order-1 col-span-12 lg:col-span-6 mx-4 md:ml-16">
            <FeatureText className="max-w-full">
              <p>
                Chickensoft is a <Emphasized>volunteer organization</Emphasized>
                .
              </p>
              <br />
              <p>
                We believe that open source game engines like{" "}
                <EmphasizedLink href="https://godotengine.org">
                  Godot
                </EmphasizedLink>{" "}
                are the future of game development. That&apos;s why we&apos;ve
                built over twenty open source projects to help facilitate Godot
                + C# development.
              </p>
              <br />
              <p>
                If you&apos;d like to show your support for Chickensoft, please
                feel free to{" "}
                <EmphasizedLink href={site.github.url}>
                  star our packages on GitHub
                </EmphasizedLink>
                ,{" "}
                <EmphasizedLink href={site.discord.inviteUrl}>
                  help others in the Discord community
                </EmphasizedLink>
                ,{" "}
                <EmphasizedLink href={"/team"}>
                  follow us on socials
                </EmphasizedLink>
                , or{" "}
                <EmphasizedLink href={"/philosophy"}>
                  contribute to our projects
                </EmphasizedLink>
                !
              </p>
              <br />
              <p>
                We&apos;re extremely grateful for all the help we&apos;ve
                received from the wider Godot community, and we can&apos;t wait
                to meet you, too!
              </p>
            </FeatureText>
          </div>
          <div className="order-1 lg:order-2 xl:order-2 col-span-12 lg:col-span-6 -mt-15">
            <section className="mx-auto w-full max-w-screen-xl">
              <div className="relative mx-auto w-full max-w-[520px] md:max-w-[70%] lg:max-w-[520px] xl:max-w-[640px]">
                <SiteImage
                  src="/img/splash/star.webp"
                  alt="Chickensoft star"
                  className="w-full object-contain pr-4"
                  quality={100}
                />

                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center lg:text-left z-10 px-4">
                    <p className="sr-only">
                      Total GitHub stars and number of projects
                    </p>

                    <div
                      className="
                    font-black leading-none tracking-tight
                    text-transparent bg-clip-text bg-gradient-to-br
                    from-yellow-200 via-amber-400 to-yellow-700
                    drop-shadow-2xl
                    [text-shadow:_0_1px_0_rgba(255,255,255,.35),_0_8px_30px_rgba(0,0,0,.55)]
                    saturate-150 contrast-125
                    select-text
                  "
                    >
                      <dl className="inline-grid grid-cols-1 gap-6 text-center">
                        <div>
                          <dd className="text-[clamp(4rem,8vw,6rem)] leading-none">
                            {millify(stats?.stars ?? 0, {
                              precision: 1,
                              lowercase: true,
                            })}
                          </dd>
                          <dt className="uppercase opacity-90 tracking-wider text-[clamp(0.9rem,1.6vw,1.1rem)]">
                            Stars
                          </dt>
                        </div>

                        <div>
                          <dd className="text-[clamp(4rem,8vw,6rem)] leading-none">
                            {stats?.repoCount ?? site.githubPackages.length}
                          </dd>
                          <dt className="uppercase opacity-90 tracking-wider text-[clamp(0.9rem,1.6vw,1.1rem)]">
                            Projects
                          </dt>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </CubuskyContainer> */}

      <SiteFooter className="mt-32" />
    </main>
  );
}

function Quote(props: {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  person?: string;
}): JSX.Element {
  return (
    <>
      <div className="px-8">
        <blockquote
          className={cn(
            `
          mx-auto
          text-2xl/10
          relative
          inline-block
          before:content-['“']
          before:absolute
          before:text-7xl
          before:-left-8
          `,
            props.className
          )}
        >
          <span
            className={`
          inline-block
          after:content-['”']
          after:absolute
          after:text-7xl
          after:-right-8
          `}
          >
            {props.children}

          </span>
        </blockquote>
      </div>
      {props.person && <span className="block mt-2 text-sm opacity-70"> — {props.person}</span>}
    </>
  );
}

function EmphasizedLink(props: {
  href: string;
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}): JSX.Element {
  const isExternal = /^https?:\/\//.test(props.href);

  return (
    <Link
      href={props.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
      className={cn(
        "inline-flex items-baseline font-semibold transition-colors",
        "bg-clip-text text-transparent bg-linear-to-r",
        "underline underline-offset-4",
        "hover:brightness-110 focus-visible:outline-none",
        "rounded-xs",
        props.className
      )}
    >
      <Emphasized>
        <>
          {props.children}
          {isExternal && <span> ↗</span>}
        </>
      </Emphasized>
    </Link>
  );
}

function FeatureText(props: {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}): JSX.Element {
  return (
    <div
      className={cn(
        "text-lg lg:text-xl/8 text-left my-8 mx-auto max-w-md",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

function RecentBlogs(props: { numBlogs: number }): JSX.Element {
  const blogs = getBlogs().slice(0, props.numBlogs);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6 mx-4">
      {blogs.map((blog) => (
        <BlogPreview
          key={blog.slugs[0]}
          slug={blog.slugs[0]}
          className="max-w-lg mx-auto"
        />
      ))}
    </div>
  );
}
