import { useLanyard } from "react-use-lanyard";

interface SpotifyCardProps {
    className: string
}

export default function SpotifyCard(props: SpotifyCardProps) {
    const {className} = props

    const lanyard = useLanyard({
        userId: "662833597966843907"
    })

    if (lanyard.data && lanyard.data.data.spotify) {
        const spotify = lanyard.data.data.spotify
        if (!lanyard.isLoading && lanyard.data.data.listening_to_spotify) {
            return (
                <div className={`flex flex-col justify-center items-center bg-black/75 w-85 h-40 border-black rounded-2xl text-[#dcc6fa] ${className}`}>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        Now Listening on Spotify
                    </h3>
                    <hr className="w-80 border-t border-[#d3b4ff] my-4" />
                    <div className="flex flex-row items-center gap-2 w-80">
                        <img src={spotify.album_art_url} width={75} className="rounded-lg outline-2 outline-white" />
                        <div className="flex flex-col">
                            <a target="_blank" rel="noopener noreferrer" href={`https://open.spotify.com/track/${spotify.track_id}`} className="hover:underline">
                                <h3 className="text-md md:text-md font-bold tracking-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                                    {(spotify.song.length < 25) ? spotify.song : spotify.song.slice(0, 28) + "..."}
                                </h3>
                            </a>
                            <h3 className="text-sm md:text-sm font-bold tracking-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[#8e81a0]">
                                On {(spotify.album.length < 25) ? spotify.album : spotify.album.slice(0, 25) + "..."}
                            </h3>
                            <h3 className="text-sm md:text-sm font-bold tracking-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[#8e81a0]">
                                By {(spotify.artist.length < 25) ? spotify.artist : spotify.artist.slice(0, 25) + "..."}
                            </h3>
                        </div>
                    </div>
                </div>
            )
        }
    }
}