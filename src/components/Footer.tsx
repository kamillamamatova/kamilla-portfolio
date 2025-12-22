export default function Footer(){
    return(
        <footer className = "border-t border-ink/10 mt-20">
            <div className = "mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-8 text-center text-sm text-ink/60 md:flex-row md:items-left md:justify-between">
                <p>© {new Date().getFullYear()} Kamilla Mamatova</p>
                <p className = "text-ink/60">
                    Built with Next.js & Tailwind & deployed on Vercel
                </p>

                <p className = "font-serif italic text-ink/50">
                    Thanks for dropping by!
                </p>
            </div>

            <div className = "mt-8 flex justify-center pb-8">
                <a href = "#main" className = "rounded-full border border-ink/10 bg-white p-3 text-ink/60 shadow-sm transition hover:text-ink hover:shadow-md">
                    ↑ Top
                </a>
            </div>
        </footer>
    );
}