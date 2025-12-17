import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage(){
    return(
        <div className = "space-y-10">
            <header className = "space-y-3">
                <h1 className = "text-3xl font-semibold tracking-tight"></h1>
                <p className = "max-w-2xl text-ink/80">
                    A small set of work that I'm proud of. Each project has a goal, 
                    constraints, lessons learned, and clear results.
                </p>
            </header>

            <div className = "grid gap-5 md:grid-cols-2">
                {projects.map((p) => (
                    <ProjectCard key = {p.title} project = {p} />
                ))}
            </div>
        </div>
    );
}