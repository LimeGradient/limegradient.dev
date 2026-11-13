import { extractColors } from "extract-colors"
import { useState } from "react"

interface TechStackCardProps {
    imgURL: string,
    name: string
}

export default function TechStackCard(props: TechStackCardProps) {
    const {imgURL, name} = props
    const [dominantColor, setDominantColor] = useState("")

    extractColors(imgURL).then((c) => setDominantColor(c[0].hex))

    if (dominantColor !== "") {
        return (
            <div className={`text-white shadow-md w-50 h-35 p-4 flex flex-col items-center justify-between gap-2 rounded-lg text-center`} style={{
                backgroundColor: `${dominantColor}8C`,
                
            }}>
                <div />
                <img src={imgURL} width={50} />
                <h3 className="text-lg md:text-2xl font-bold tracking-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    {name}
                </h3>
            </div>
        )
    }
}