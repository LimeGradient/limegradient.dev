interface HeroProps {
    imgURL: string,
    children: React.ReactNode
}

export default function Hero(props: HeroProps) {
    const {imgURL, children} = props;

    return (
        <div className="relative h-full w-full flex items-center justify-center bg-center">
            <img src={imgURL} className="absolute w-full h-full object-cover" />
            {children}
        </div>
    )
}