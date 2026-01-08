import Layout from "@/components/layout";
import GradientText from "@/components/react-bits/gradient_text";
import Particles from "@/components/react-bits/particles_background";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "limegradient's portfolio",
  description: "The homepage of limegradient.dev",
};


export default function Home() {
    return (
        <Layout>
            <Particles />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-75 z-10">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50 z-1000">
                    Hi, im Lily!
                </h1>
                <h3 className="text-zinc-50 z-1000">
                    An 18 year old self taught programmer
                </h3>
                <footer className="fixed bottom-5 flex flex-row gap-1">
                    <GradientText colors={["#5BCEFA", "#F5A9B8", "#FFFFFF", "#F5A9B8", "#5BCEFA"]} animationSpeed={5} showBorder={false} yoyo={false}>
                        transgender
                    </GradientText>
                    <p>and</p>
                    <GradientText colors={["#FF218C", "#FFD800", "#21B1FF", "#FFD800", "#FF218C"]} animationSpeed={5} showBorder={false} yoyo={false}>
                        pansexual
                    </GradientText>
                </footer>
            </div>
        </Layout>
    );
}
