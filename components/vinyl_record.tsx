import { useLanyard } from "react-use-lanyard";

export default function VinylRecord() {
    const lanyard = useLanyard({
        userId: "662833597966843907"
    })

    const spotify = lanyard.data?.data.spotify

    if (!lanyard.isLoading && lanyard.data?.data.listening_to_spotify) {
        return (
            <div className="flex flex-col items-center">
                <h3 className="text-zinc-50">I'm currently listening to: </h3>
                <div id="spin" className="relative flex items-center justify-center w-[300px] h-[300px]">
                    <style jsx>{`
                        @keyframes spin {
                            from {
                                transform: rotate(0deg);
                            }
                            to {
                                transform: rotate(360deg);
                            }
                        }

                        #spin {
                            animation: spin 15s linear infinite;
                        }
                    `}</style>
                    <img src="/record.png" width={300} className="absolute" />
                    <img src={spotify?.album_art_url} width={75} className="absolute rounded-full"/>
                </div>
                <div className="flex flex-row gap-1">
                    <h3 className="text-zinc-50 font-bold">{spotify?.song}</h3>
                    <h3 className="text-zinc-50">by</h3>
                    <h3 className="text-zinc-50 font-bold">{spotify?.artist}</h3>   
                </div>
                <div className="flex flex-row gap-1">
                    <h3 className="text-zinc-50">on</h3>
                    <h3 className="text-zinc-50 font-bold">{spotify?.album}</h3>   
                </div>
            </div>
        )
    }
}