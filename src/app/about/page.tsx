import Image from "next/image";

export default function AboutPage(){
    return(
        <div className = "space-y-10">
            <header className = "space-y-3">
                <h1 className = "text-3xl font-semibold tracking-tight">About me</h1>
                <p className = "max-w-2xl text-ink/80">
                    I'm Kamilla, a junior Computer Science student passionate about SWE.
                </p>
            </header>

            {/*<div className = "mb-8 flex justify-center md:justify-start">
                <div className = "relative h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-soft">
                    <Image
                        src = "/photome.jpg"
                        alt = "Kamilla Mamatova"
                        fill
                        className = "object-cover"
                    />
                </div>
            </div>*/}

            {/* Stats */}
            <section className = "grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                    { label: "GPA", value: "3.6" },
                    { label: "Projects", value: "5+" },
                    { label: "LeetCode Solved", value: "54"},
                    { label: "Hackathon", value: "1" },
                ].map((stat) => (
                    <div
                        key = {stat.label}
                        className = "flex flex-col items-center justify-center rounded-2xl border border-ink/10 bg-petal/50 p-2 text-center shadow-sm transition hover:scale-105 hover:bg-peony"
                    >
                        <span className = "text-2xl font-bold text-ink">{stat.value}</span>
                        <span className = "text-xs font-medium uppercase tracking-wider text-ink/50">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </section>

            <section className = "rounded-3xl border border-ink/10 bg-canvas/60 backdrop-blur-sm p-6 shadow-soft">
                <h2 className = "text-base font-semibold">What I care about</h2>
                <div className = "mt-4 space-y-3 text-sm leading-relaxed text-ink/75">
                    <p>
                        I care about clarity, code that’s easy to follow a week later, and interfaces that don’t make the user work harder than they have to.
                    </p>
                    <p>
                        I like building things that hold up past the demo: solid data flow, sensible structure, and small details that prevent annoying bugs.
                    </p>
                    <p>
                        On the AI side, I’m interested in practical uses, using models as a tool inside an app (with good prompts, guardrails, and predictable output).
                    </p>
                </div>
            </section>

            <section className = "space-y-2">
                <h2 className = "text-base font-semibold font-serif">Tech Stack</h2>
                <div className = "flex flex-wrap gap-2">
                    {["Python", "Java", "C", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Git", 
                    "SQL", "Figma", "GameMaker Studio", "PyTorch", "Vercel", "Node.js", "NumPy", "Pandas",
                     "Plotly", "Matplotlib"].map((tech) => (
                        <span
                            key = {tech}
                            className = "rounded-full bg-petal/50 px-3 py-1 text-xs text-ink/75 shadow-sm border border-ink/5"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            <section className = "space-y-6">
                <h2 className = "text-base font-semibold font-serif">My Journey</h2>
                <div className = "relative border-l-2 border-ink/10 ml-3 space-y-8 py-2">
                    <div className = "relative pl-8">
                        <span className = "absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-petal shadow-sm"></span>
                        <span className = "mb-1 block text-xs font-medium uppercase tracking-wider text-ink/40">
                            Present
                        </span>
                        <h3 className = "font-semibold text-ink">Building & Learning</h3>
                        <p className = "mt-1 text-sm text-ink/75">
                            Developing this portfolio, practicing LeetCode, and exploring new frameworks.
                        </p>
                    </div>

                    <div className = "relative pl-8">
                        <span className = "absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-petal/90 shadow-sm"></span>
                        <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-ink/40">
                            September - December 2025
                        </span>
                        <h3 className="font-semibold text-ink">Mitsy's Print</h3>
                        <p className="mt-1 text-sm text-ink/75">
                            Contributed to building a story-driven, puzzle-based, adventure RPG.
                        </p>
                    </div>

                    <div className = "relative pl-8">
                        <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-petal/80 shadow-sm"></span>
                        <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-ink/40">
                            October 2025
                        </span>
                        <h3 className="font-semibold text-ink">KnightHacks Hackathon 2025</h3>
                        <p className="mt-1 text-sm text-ink/75">
                            Contributed to building RocketTime in 36 hours, a productivity app helping users identify wasted time.
                        </p>
                    </div>

                    <div className = "relative pl-8">
                        <span className = "absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-petal/70 shadow-sm"></span>
                        <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-ink/40">
                            August 2025
                        </span>
                        <h3 className="font-semibold text-ink">FocusUp</h3>
                        <p className="mt-1 text-sm text-ink/75">
                            Built a simple, embeddable timer for students and makers: users can count up to their daily goal, log sessions, and keep streaks alive.
                        </p>
                    </div>

                    <div className = "relative pl-8">
                        <span className = "absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-petal/60 shadow-sm"></span>
                        <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-ink/40">
                            May - July 2025
                        </span>
                        <h3 className="font-semibold text-ink">Kestel Website</h3>
                        <p className="mt-1 text-sm text-ink/75">
                           Contributed to building a student-led autonomous drone project website.
                        </p>
                    </div>

                    <div className = "relative pl-8">
                        <span className = "absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-petal/50 shadow-sm"></span>
                        <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-ink/40">
                            April - June 2025
                        </span>
                        <h3 className="font-semibold text-ink">Job Market Insights</h3>
                        <p className="mt-1 text-sm text-ink/75">
                            Built a responsive web application with React and Tailwind CSS that allows users to search for job listings in real-time.
                        </p>
                    </div>

                    <div className = "relative pl-8">
                        <span className = "absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-petal/40 shadow-sm"></span>
                        <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-ink/40">
                            March 2025
                        </span>
                        <h3 className="font-semibold text-ink">AI Resume Analyzer</h3>
                        <p className="mt-1 text-sm text-ink/75">
                            Built intelligent resume review app that uses OpenAI's GPT-3.5 to give users actionable feedback on their resumes.
                        </p>
                    </div>

                    <div className="relative pl-8">
                        <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-petal/30 shadow-sm"></span>
                        <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-ink/40">
                            August 2023
                        </span>
                        <h3 className="font-semibold text-ink">Started at UCF</h3>
                        <p className="mt-1 text-sm text-ink/75">
                            Began my Bachelor of Science in Computer Science.
                        </p>
                    </div>
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
                        I’m interested in philosophy (ethics, meaning, human behavior), long walks for reflection, and building playlists for every possible mood.
                    </p>
                </div>
            </section>

            <section className = "space-y-3">
                <h2 className = "text-base font-semibold font-serif">Course Work</h2>
                <ul className = "grid grid-cols-2 gap-2 text-sm text-ink/88 sm:grid-cols-3">
                    {[
                        "Computer Science I & II",
                        "Calculus w/ Analytical Geometry I & II",
                        "Matrix & Linear Algebra",
                        "AI for Game Programming",
                        "Physics w/ Calculus I",
                        "Statistical Methods I",
                        "Computer Logic and Organization",
                        "Discrete I",
                        "Object-Oriented Programming",
                    ].map((course) => (
                        <li key = {course} className = "flex items-center gap-2">
                            <span className = "h-1.5 w-1.5 rounded-full bg-petal/60" />
                            {course}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}