import Footer from "./components/footer"
import Hero from "./components/hero"
import SpotifyCard from "./components/spotify_card"
import StarfallText from "./components/starfall_text"
import TechStackCard from "./components/tech_stack_card"

function App() {
  return (
    <div className="w-screen h-screen bg-[#000b0e] overflow-y-scroll">
      <Hero imgURL="/title_background.jpg">
        <>
        <div className="absolute flex justify-center inset-0 bg-black/50 rounded-md">
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-[#dcc6fa]">
            <h1 className="text-xl md:text-4xl font-bold tracking-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Hi! I'm <StarfallText duration={6}>Kevin Burns!</StarfallText>
            </h1>
            <hr className="w-full border-t border-[#d3b4ff] my-4" />
            <h3 className="text-lg md:text-2xl font-bold tracking-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                IT Student @ Strayer University
            </h3>
            <h3 className="text-lg md:text-2xl font-bold tracking-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Full Stack Developer
            </h3>
          </div>
        </div>
        <SpotifyCard className="absolute top-5 right-5"/>
        </>
      </Hero>

      <hr className="w-full border-t-4 border-slate-900" />

      <Hero imgURL="/about_background.jpg">
        <div className="absolute flex justify-center inset-0 bg-black/50 rounded-md">
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-[#dcc6fa]">
            <h1 className="text-xl md:text-4xl font-bold tracking-tight drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">
                About Me
            </h1>
            <h4 className="text-md md:text-xl font-bold tracking-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              I am a full-stack developer from Pennsylvania. I have always loved programming and got really into website design and full stack development at a young age.
            </h4>
            <h4 className="text-md md:text-xl font-bold tracking-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Game modding is also a big passion of mine; I love adding more to some of my favorite games of all time!
            </h4>

            <hr className="w-full border-t border-[#d3b4ff] my-4" />
            
            <h1 className="text-xl md:text-4xl font-bold tracking-tight drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">
                My Stack
            </h1>
            <br />

            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 items-center justify-center">
                <h3 className="text-lg md:text-2xl font-bold tracking-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    Full Stack Development
                </h3>
                <div className="flex flex-row flex-wrap w-158 gap-4 justify-center">
                  <TechStackCard imgURL="/icons/html5.svg" name="HTML5" />
                  <TechStackCard imgURL="/icons/css.svg" name="CSS" />
                  <TechStackCard imgURL="/icons/javascript.svg" name="JavaScript" />
                  <TechStackCard imgURL="/icons/typescript.svg" name="TypeScript" />
                  <TechStackCard imgURL="/icons/expressjs_dark.svg" name="Express.js" />
                  <TechStackCard imgURL="/icons/react_dark.svg" name="React.js" />
                  <TechStackCard imgURL="/icons/sqlite.svg" name="SQLite" />
                </div>
              </div>
              <div className="h-full w-px bg-[#d3b4ff]" aria-hidden="true" />
              <div className="flex flex-col gap-2 items-center justify-start">
                <h3 className="text-lg md:text-2xl font-bold tracking-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    Software Development / Game Modding
                </h3>
                <div className="flex flex-row flex-wrap w-158 gap-4 justify-center  h-113">
                  <TechStackCard imgURL="/icons/c-plusplus.svg" name="C++" />
                  <TechStackCard imgURL="/icons/csharp.svg" name=".NET" />
                  <TechStackCard imgURL="/icons/python.svg" name="Python" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </Hero>

      <hr className="w-full border-t-4 border-blue-950" />

      <Footer />
    </div>
  )
}

export default App
