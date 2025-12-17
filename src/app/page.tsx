import Link from "next/link";

export default function HomePage(){
  return(
    <div className = "space-y-14 relative">
      <div className = "absolute -z-10 top-0 right-0 h-64 w-64 rounded-full bg-petal/30 blur-3xl"/>
      <section className = "space-y-6">
        <div className = "inline-flex items-center gap-2 rounded-full border border-ink/10 bg-canvas px-3 py-1 text-xs text-ink/70 shadow-soft">
          <span className = "h-2 w-2 rounded-full bg-petal" aria-hidden = "true" />
            Junior CS student with SWE and AI focus
        </div>

        <h1 className = "text-3xl font-serif tracking-tight md:text-5xl">
          I build clean, accessible products and I like making the details feel calm.
        </h1>

        <p className = "max-w-2xl text-base leading-relaxed text-ink/80 md:text-lg">
          I’m a Computer Science junior interested in Software Engineering and applied AI.
          I care about readable code, thoughtful UX, and shipping work that holds up in the real world.
        </p>

        <div className = "flex flex-wrap items-center gap-3">
          <Link
            href = "/projects"
            className = "rounded-md bg-ink px-4 py-2 text-sm font-medium text-canvas shadow-soft transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-blush"
          >
            View projects
          </Link>

          <Link
            href = "/contact"
            className = "rounded-md border border-ink/15 bg-canvas px-4 py-2 text-sm font-medium text-ink shadow-soft transition hover:bg-ink/5 focus:outline-none focus:ring-2 focus:ring-blush"
          >
            Contact me
          </Link>

          <a
            href = "https://github.com/kamillamamatova"
            target = "_blank"
            rel = "norefferrer"
            className = "text-sm text-ink/80 underline decoration-petal decoration-2 underline-offset-2 hover:decoration-wavy focus:outline-none focus:ring-2 focus:ring-blush"
          >
            GitHub
          </a>

          <a 
            href = "https://www.linkedin.com/in/kamilla-mamatova/"
            target = "_blank"
            rel = "norefferrer"
            className = "text-sm text-ink/80 underline decoration-petal decoration-2 underline-offset-4 hover:decoration-wavy focus:outline-none focus:ring-2 focus:ring-blush"
            >
              LinkedIn
          </a>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Engineering first",
            body: "TypeScript, testing where it matters, and code that’s easy to own after the first demo.",
          },
          {
            title: "Accessibility always",
            body: "Keyboard support, contrast, semantics, and calm UIs that don’t fight the user.",
          },
          {
            title: "AI with purpose",
            body: "Applied ML/LLM work that’s measurable, not vague hype.",
          },
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-ink/10 bg-canvas p-6 shadow-soft"
          >
            <h2 className="text-base font-serif">{c.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">{c.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}