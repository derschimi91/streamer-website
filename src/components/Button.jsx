export const Button = ({
    className = "",
    color = "primary",
    size = "default",
    type = "button",
    children,
    ...props
}) => {
    const baseClasses =
        "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

    const colorClasses = {
        primary: "bg-primary hover:bg-primary/80 shadow-primary/25",
        twitch: "bg-twitch-primary hover:bg-twitch-hover shadow-twitch-primary/25",
        youtube: "bg-youtube-primary hover:bg-youtube-hover shadow-youtube-primary/25",
        purple: "bg-twitch-primary hover:bg-twitch-hover shadow-twitch-primary/25",
        red: "bg-youtube-primary hover:bg-youtube-hover shadow-youtube-primary/25",
        blue: "bg-sky-500 hover:bg-sky-600 shadow-sky-500/25",
        green: "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/25",
    };
    
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    const classes = `${baseClasses} ${sizeClasses[size] ?? sizeClasses.default} ${colorClasses[color] ?? colorClasses.primary} ${className}`;

    return (
        <button type={type} className={classes} {...props}>
            <span className="relative flex items-center justify-center gap-2 text-secondary-foreground transition-all duration-300">
                {children}
            </span>
        </button>
    );
};
