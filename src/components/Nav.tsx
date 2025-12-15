import Link from "next/link";

const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Nav(){
    return(
        <header className = "sticky top-0 z-40 border-b border-ink/10 bg-canvas/80 backdrop-blur">
            <div className = "mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
                <Link
                    href = "/"
                    className = "group inline-flex items-baseline gap-2 text-base font-semibold tracking-tight"
                >
                    <span className = "relative">
                        Kamilla Mamatova
                        <span className = "absolute -bottom-1 left-0 h-[2px] w-0 bg-petal transition-all group-hover:w-full" />
                    </span>
                    <span className = "text-ink/60 text-sm font-medium"> SWE & AI</span>
                </Link>

                <nav aria-label = "Primary">
                    <ul className = "flex items-center gap-1">
                        {links.map((l) => (
                            <li key = {l.href}>
                                <Link
                                    href = {l.href}
                                    className = "rounded-md px-3 py-2 text-sm text-ink/80 transition hover:bg-ink/5 hover:text-ink focus:outline-none focus:ring-blush"
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}