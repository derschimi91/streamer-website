import { Radio, MessageCircle, Camera, MessagesSquare, Play } from "lucide-react";

const socialLinks = [
    { icon: Radio, href: "#", label: "Twitch" },
    { icon: MessageCircle, href: "#", label: "Twitter" },
    { icon: Camera, href: "#", label: "Instagram" },
    { icon: MessagesSquare, href: "#", label: "Discord" },
    { icon: Play, href: "#", label: "YouTube" },
];

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#mystats", label: "MyStats" },
    { href: "#highlights", label: "Highlights" },
    { href: "#mymaingames", label: "MyMainGames" },
    { href: "#cooperations", label: "Cooperations" }
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    
                    {/* Logo and Copyright */}
                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl font-bold tracking-tight">
                            Der<span>_</span>Schimanski
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                            &copy; {currentYear} Der_Schimanski. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
