"use client"

import Layout from "@/components/layout";
import Particles from "@/components/react-bits/particles_background";
import VinylRecord from "@/components/vinyl_record";

export default function AboutPage() {
    return (
        <Layout title="limegradient's about me" description="About LimeGradient">
            <Particles />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50 z-1000">
                    About Me!
                </h1>
            </div>
        </Layout>
    )
}