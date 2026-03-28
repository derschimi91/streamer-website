import { Button } from "@/components/Button";
import { LiaTwitch, LiaYoutube } from "react-icons/lia";

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Hero */}
        <div className="absolute inset-0">
            <img src="/ai_gamingsetup.png" alt="Hero Image" className="w-full h-full object-cover opacity-40"/>
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"/>
        </div>

        {/* Light Blue Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(40)].map((_, i) =>(
                <div 
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#4ce9fa",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `drift-slow ${
                            15 + Math.random() * 20
                        }s ease-in-out infinite`,
                        animationDelay: `${Math.random() *5}s`,
                    }}
                />
            ))}
        </div>

        {/* Content of Hero Section*/}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Section Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Twitch Streamer / YouTube Content Creator
                        </span>
                    </div>
                    {/* Main Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">Straming <span className="text-primary glow-text .animation-delay-100">and</span>
                            <br />
                             Create Videos <span className="text-primary glow-text">with</span>
                            <br />
                            <span className="font-serif italic font-normal text-white">
                            Fun 
                            </span>
                        </h1>
                        <p className="text-lg text-secondary-foreground/50 max-w-lg animation-fade-in-left animation-delay-600">
                            Hi, I'm Der_Schimanski, a passionate Twitch streamer and YouTube content creator. 
                            Join me on my gaming adventures, where I share fun moments, tips, and engaging content with my amazing community. 
                            Let's connect and have a blast together!
                        </p>
                    </div>
                    {/* Twitch and YouTube Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <Button size="default" color="twitch" onClick={() => window.open("https://www.twitch.tv/der_schimanski", "_blank")}>
                            <LiaTwitch size={24} className="inline-block mr-2"/>
                            Follow Me
                        </Button>
                        <Button size="default" color="youtube" onClick={() => window.open("https://www.youtube.com/@Der_Schimanski", "_blank")}>
                            <LiaYoutube size={24} className="inline-block mr-2"/>
                            Subscribe
                        </Button>
                    </div>
                </div>

                {/* Right Section Column */}
                <div className="relative min-h-[560px] flex items-center justify-center">
                    {/* Card with Image one */}
                    <div className="absolute top-8 left-15 w-[220px] md:w-[240px] rounded-[28px] overflow-hidden glass border border-primary/30 shadown-2xl rotatd-[-10deg] animation-slide-in-left">
                        <img
                            src="/ai_building_game.png"
                            alt="Building Game"
                            className="w-full h-[300px] object-cover"
                        />
                    </div>
                    {/* Card with Image two */}
                    <div className="absolute bottom-10 right-15 -[230px] md:w-[250px] rounded-[28px] overflow-hidden glass border border-primary/30 shadow-2xl rotat-[8deg] animation-slide-in-right animation-delay-300">
                        <img
                            src="/ai_survival_game.png"
                            alt="Survival Game"
                            className="w-full h-[320px] object-cover"
                        />
                    </div>
                    {/* Main Image */}
                    <div className="relative z-10 animation-slide-up animation-delay-500">
                        <img
                            src="/my-character-2.png"
                            alt="Der Schimanski Avatar"
                            className="w-[460px] md:w-[560px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
