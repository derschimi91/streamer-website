import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { MyStats } from "@/sections/MyStats";
import { Highlights } from "@/sections/Highlights";
import { MyMainGames } from "@/sections/MyMainGames";
import { Cooperations } from "@/sections/Cooperations";
import { Media } from "@/sections/Media";
import { Contact } from "@/sections/Contact";

function App() {
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About/>
        <MyStats />
        <Highlights />
        <MyMainGames />
        <Cooperations />
        <Media />
        <Contact />
      </main>
    </div>
  )
}

export default App
