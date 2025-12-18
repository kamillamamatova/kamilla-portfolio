export default function AboutPage(){
    return(
        <div className = "space-y-10">
            <header className = "space-y-3">
                <h1 className = "text-3xl font-semibold tracking-tight">About me</h1>
                <p className = "max-w-2xl text-ink/80">
                    I'm Kamilla, a junior Computer Science student passionate about SWE and AI...
                </p>
            </header>

            <section className = "rounded-3xl border border-ink/10 bg-canvas/60 backdrop-blur-sm p-6 shadow-soft">
                <h2 className = "text-base font-semibold">What I care about</h2>
                <div className = "mt-4 space-y-3 text-sm leading-relaxed text-ink/75">
                    <p>
                        I value clarity: code that’s easy to read, UIs that don’t overwhelm, and projects that
                        explain themselves quickly.
                    </p>
                    <p>
                        Stuff
                    </p>
                    <p>
                        On the AI side, ...
                    </p>
                </div>
            </section>

            <section className = "grid gap-4 md:grid-cols-2">
                <div className = "rounded-3xl border border-ink/10 bg-canvas/60 backdrop-blur-sm p-6 shadow-soft">
                    <h2 className = "text-base font-semibold">Currently</h2>
                    <p className = "mt-2 text-sm text-ink/75">
                        Building my portfolio site, strengthening fundamentals, 
                        practicing LeetCode problems, and getting sharper at writing about
                        technical decisions.
                    </p>
                </div>

                <div className = "rounded-3xl border border-ink/10 bg-canvas/60 backdrop-blur-sm p-6 shadow-soft">
                    <h2 className = "text-base font-semibold">Outside of class</h2>
                    <p className = "mt-2 text-sm text-ink/75">
                        I don't know
                    </p>
                </div>
            </section>

            <section className = "spcae-y-2">
                <h2 className = "text-base font-semibold font-serif">Tech Stack</h2>
                <div className = "flex flex-wrap gap-2">
                    {["Python", "Java", "C", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Git", 
                    "SQL", "Figma", "GameMaker Studio", "PyTorch", "Vercel", "Next", "Node.js", "NumPy", "Pandas",
                     "Plotly", "MatPlotlib"].map((tech) => (
                        <span
                            key = {tech}
                            className = "rounded-full bg-petal/55 px-3 py-1 text-xs text-ink/80 shadow-sm border border-ink/5"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    );
}