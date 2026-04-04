"use client"

import Layout from "@/components/layout";
import Particles from "@/components/react-bits/particles_background";

export default function AboutPage() {
    return (
        <Layout title="limegradient's about me" description="About LimeGradient">
            <Particles />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50 z-1000">
                    About Me!
                </h1>
                <br />
                <p className="text-zinc-50 text-center">
                    Hi! My name is Chloe and i'm an 18 year old. I am an avid programmer who loooooves working on stuff like websites and games. <br />
                    Since I was little, i've loved video games and always wanted to learn how to make them. So I dedicated a few years of my life to learning how to make video games! <br />
                    I also was always interested in how websites were made, so I spent a few years learning React and Typescript to become a full stack developer!
                </p>
            </div>
        </Layout>
    )
}
