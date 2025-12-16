export default function Footer(){
    return(
        <footer className = "border-t border-ink/10">
            <div className = "mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-ink/70 md:flex-row md:items-center md:justify-between">
                <p>© {new Date().getFullYear()} Kamilla Mamatova</p>
                <p className = "text-ink/60">
                    Built with Next.js & Tailwind & deployed on Vercel
                </p>
            </div>
        </footer>
    );
}