import Navbar from "./navbar";

interface LayoutProps {
    children: React.ReactNode,
    title: string,
    description: string
}

export default function Layout(props: LayoutProps) {
    const {children, title, description} = props

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="description" content={description} />
            <title>{title}</title>
            <div className="w-screen h-screen relative">
                <div className="absolute flex flex-col items-center inset-x-0 top-2 left-0 z-100">
                    <Navbar />
                </div>
                {children}
            </div>
        </>
    )
}