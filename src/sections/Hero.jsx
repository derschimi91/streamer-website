export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Hero */}
        <div className="absolute inset-0">
            <img src="/ai_gamingsetup.png" alt="Hero Image" className="w-full h-full object-cover opacity-40"/>
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-primary-foreground/10 to-background"/>
        </div>
    </section>
    )
}