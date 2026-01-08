"use client"

import Layout from "@/components/layout";
import ProjectCard from "@/components/project_card";
import AnimatedContent from "@/components/react-bits/animated_content";
import Particles from "@/components/react-bits/particles_background";
import { Metadata } from "next";

export default function ProjectsPage() {
    return (
        <Layout title="limegradient's projects" description="Projects by LimeGradient">
            <Particles />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50 z-1000">
                    Projects 
                </h1>       
                <br />
                <div className="flex flex-row gap-5">
                    <ProjectCard 
                        projectTitle="trophycase.org" 
                        projectLink="https://trophycase.org" 
                        projectGithub="https://github.com/trophycaseorg">
                        <p>trophycase.org is an achievement tracking/showcase website with Steam, RetroAchievements, Xbox, and Playstation integration</p>
                    </ProjectCard>
                    <ProjectCard 
                        projectTitle="node-steamworks-api" 
                        projectLink="https://www.npmjs.com/package/node-steamworks-api" 
                        projectGithub="https://github.com/LimeGradient/node-steam-api"
                        githubAPILink="https://api.github.com/repos/LimeGradient/node-steam-api">
                        <p>node-steamworks-api is a Steamworks Web API wrapper made with Typescript. Native type support and supports all interfaces</p>
                    </ProjectCard>
                    <ProjectCard
                        projectTitle="FNAF World Engine"
                        projectGithub="https://github.com/Team-Reimagined/FNAFWorldEngine"
                        githubAPILink="https://api.github.com/repos/Team-Reimagined/FNAFWorldEngine">
                        <p>
                            FNAF World Engine is a game engine aiming to ease the creation of FNAF World Fangames that comes with a full recreation of FNAF World, written
                            in C++
                        </p>
                    </ProjectCard>
                </div>
            </div>
        </Layout>
    )
}