import Navbar from "./navbar";

interface LayoutProps {
    children: React.ReactNode,
}

export default function Layout(props: LayoutProps) {
    const {children} = props

    return (
        <>
            <div className="w-screen h-screen relative">
                <div className="absolute flex flex-col items-center inset-x-0 top-2 left-0 z-100">
                    <Navbar />
                </div>
                {children}
            </div>
        </>
    )
}