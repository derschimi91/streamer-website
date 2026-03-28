import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#mystats", label: "MyStats" },
    { href: "#highlights", label: "Highlights" },
    { href: "#mymaingames", label: "MyMainGames" },
    { href: "#cooperations", label: "Cooperations" },
];



export const Navbar = () => {

    const [isMoblieMenuOpen, setIsMobileMenuOpen] = useState(false);
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
                    <a href="#" className="flex items-start gap-4 text-xl font-bold tracking-tight hover:text-primary hover:duration-800">
                        <img 
                            src="/my_Character_2.png"
                            alt="Der Schimanski Logo"
                            className="w-10 h-10 rounded-full shrink-0 top-0"/>
                        <span className="leading-10">
                            Der<span className="text-primary">_</span>Schimanski
                        </span>
                    </a>

                { /* Desktop Navigation */ }
                <div className="flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-6 py-3 text-sm text-shadow-secondary-foreground hover:text-primary rounded-full hover:bg-hover-navbar/20 hover:border-border/40 hover:backdrop-blur-lg">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact Button */}
                <div className="hidden md:block hover:text-secondary-foreground transition-all duration-300">
                    <Button size="sm">Contact Me</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-secondary-foreground cursor-pointer"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                        {isMoblieMenuOpen ? <X size={24}/> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMoblieMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg text-muted-foreground hover:text-secondary-foreground py-2"
                            >
                                {link.label}
                            </a>
                        ))}

                        <Button onClick={() => setIsMobileMenuOpen(false)}>
                            Contact Me
                        </Button>
                    </div>
                </div>
            )}
        </header>
    ); 
}