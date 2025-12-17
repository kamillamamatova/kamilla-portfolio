import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project}){
    return(
        <article className = "rounded-3xl border border-ink/10 bg-canvas/60 backdrop-blur-sm p-6 shadow-soft">
            <header className = "space-y-2">
                <h2 className = "text-lg font-semibold tracking-tight">{project.title}</h2>
                <p className = "text-sm leading-relaxed text-ink/75">{project.description}</p>
            </header>

            <div className = "mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                    <span
                        key = {t}
                        className = "rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-xs text-ink/70"
                    >
                        {t}
                    </span>
                ))}
            </div>

            {project.highlights?.length ? (
                <ul className = "mt-4 space-y-1 text-sm text-ink/70">
                    {project.highlights.map((h) => (
                        <li key = {h} className = "flex gap-2">
                            <span className = "mt-[7px] h-1.5 w-1.5 rounded-full bg-petal" aria-hidden = "true" />
                            <span>{h}</span>
                        </li>
                    ))}
                </ul>
            ) : null}

            <div className = "mt-5 flex flex-wrap gap-3">
                {project.links.map((link) => (
                    <a
                        key = {link.href}
                        href = {link.href}
                        target = "_blank"
                        rel = "norefferrer"
                        className = "text-sm underline decoration-petal decoration-2 underline-offset-4 hover:text-ink focus:ring-2 focus:ring-blush"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </article>
    );
}