import{ Mail, Github, Linkedin } from "lucide-react";

export default function ContactPage(){
    return(
        <div className = "space-y-10">
            <header className = "space-y-3">
                <h1 className = "text-3xl font-semibold tracking-tight">Contact</h1>
                <p className = "max-w-2xl text-ink/80">
                    If you want to talk about an internship, a project, or a role, email is best.
                </p>
            </header>

            <section className = "grid gap-4 sm:grid-cols-3">
                <a
                    href = "mailto:kamillamamatova.km@gmail.com"
                    className = "group flex flex-col items-center gap-3 rounded-2xl border border-ink/10 bg-canvas p-6 text-center shadow-soft transition hover:border-petal-50 hover:bg-white"
                >
                    <div className = "rounded-full bg-petal/20 p-3 text-ink transition group-hover:scale:110">
                        <Mail size = {24} />
                    </div>
                    <span className = "text-sm font-medium text-ink/80">Email Me</span>
                </a>

                <a
                    href = "https://github.com/kamillamamatova"
                    target = "_blank"
                    className = "group flex flex-col items-center gap-3 rounded-2xl border border-ink/10 bg-canvas p-6 text-center shadow-soft transition hover:border-petal/50 hover:bg-white"
                >
                    <div className = "rounded-full bg-petal/20 p-3 text-ink transition group-hover:scale-110">
                        <Github size = {24} />
                    </div>
                    <span className = "text-sm font-medium text-ink/80">GitHub</span>
                </a>

                <a
                    href = "https://www.linkedin.com/in/kamilla-mamatova/"
                    target = "_blank"
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-ink/10 bg-canvas p-6 text-center shadow-soft transition hover:border-petal/50 hover:bg-white"
                >
                    <div className="rounded-full bg-petal/20 p-3 text-ink transition group-hover:scale-110">
                        <Linkedin size={24} />
                    </div>
                    <span className="text-sm font-medium text-ink/80">LinkedIn</span>
                </a>
            </section>
        </div>
    );
}