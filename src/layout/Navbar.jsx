import { useEffect, useState } from "react";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#mystats", label: "MyStats" },
    { href: "#highlights", label: "Highlights" },
    { href: "#mymaingames", label: "MyMainGames" },
    { href: "#cooperations", label: "Cooperations" },
];

export const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(windows.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${ isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
            <nav className="container-navbar mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary hover:duration-800">
                    Der<span className="text-primary">_</span>Schimanski
                </a>

                { /* Desktop Navigation */ }
                <div className="flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-shadow-secondary-foreground hover:text-primary rounded-full hover:bg-background">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    ); 
}