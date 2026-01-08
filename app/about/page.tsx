import Layout from "@/components/layout";
import Particles from "@/components/react-bits/particles_background";

export default function AboutPage() {
    return (
        <Layout>
            <Particles />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-75 z-10">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50 z-1000">
                    About Me!
                </h1>
            </div>
        </Layout>
    )
}