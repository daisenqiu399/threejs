import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
const AboutDetails = () => {
    return (
        <section className="py-20 w-full">
            <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
                <ItemLayout
                    className={
                        'col-span-full lg:col-span-8 row-span-2 flex-col items-start'
                    }
                >
                    <h2 className="text-light text-xs sm:text-sm md:text-base">
                        <p>
                            My journey in web development is powered by an array of mystical
                            tools and languages, with JavaScript casting the core of my
                            enchantments. I wield frameworks like React.js and Next.js with
                            precision, crafting seamless portals (websites) that connect realms
                            (users) across the digital universe. The ancient arts of the
                            Jamstack empower me to create fast, secure, and dynamic experiences,
                            while my design skills ensure every creation is not only functional
                            but visually captivating. Join me as I continue to explore new
                            spells and technologies to shape the future of the web.
                        </p>
                    </h2>
                </ItemLayout>

                <ItemLayout
                    className={
                        'col-span-full xs:col-span-6 lg:col-span-4 text-accent'
                    }
                >
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        25+ <sub className="font-semibold text-base">client</sub>
                    </p>
                </ItemLayout>

                <ItemLayout
                    className={
                        'col-span-full xs:col-span-6 lg:col-span-4 text-accent'
                    }
                >
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        4+{" "}
                        <sub className="font-semibold text-base">years of experience</sub>
                    </p>
                </ItemLayout>

                <ItemLayout
                    className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
                >
                    <img
                        className="w-full h-auto"
                        src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=daisenqiu399&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
                        alt="CodeBucks"
                        loading="lazy"
                    />
                </ItemLayout>
                <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
                    <img
                        className="w-full h-auto"
                        src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=daisenqiu399&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
                        alt="CodeBucks"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout
                    className={'col-span-full'}>
                    <img
                        className="w-full h-auto"
                        src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
                    >
                    </img>

                </ItemLayout>
                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <img
                        className="w-full h-auto"
                        src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=daisenqiu399&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
                        alt="CodeBucks"
                        loading="lazy"
                    />
                </ItemLayout>
                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <Link
                        href="https://github.com/daisenqiu399/chatNBT"
                        target="_blank"
                        className="w-full"
                    >
                        <img
                            className="w-full h-auto"
                            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=daisenqiu399&repo=chatNBT&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
                            alt="CodeBucks"
                            loading="lazy"
                        />
                    </Link>
                </ItemLayout>
            </div>
        </section>
    );
};
export default AboutDetails