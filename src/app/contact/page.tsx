export default function ContactPage(){
    return(
        <div className = "space-y-10">
            <header className = "space-y-3">
                <h1 className = "text-3xl font-semibold tracking-tight">Contact</h1>
                <p className = "max-w-2xl text-ink/80">
                    If you want to talk about an internship, a project, or a role, email is best.
                </p>
            </header>

            <section className = "rounded-2xl border border-ink/10 bg-canvas p-6 shadow-soft">
                <div className = "space-y-3 text-sm text-ink/75">
                    <p>
                        Email:{" "}
                        <a
                            className = "underline decoration-petal decoration-2 underline-offset-4 hover:decoration-wavy focus:ouline_none focus:ring-2 focus:ring-blush"
                            href = "mailto:kamillamamatova.km@gmail.com"
                        >
                            kamillamamatova.km@gmail.com
                        </a>
                    </p>
                    <p>
                        GitHub:{" "}
                        <a
                            className = "underline decoration-petal decoration-2 underline-offset-4 hover:decoration-wavy focus:ouline_none focus:ring-2 focus:ring-blush"
                            href = "http://github.com/kamillamamatova"
                            target = "_blank"
                            rel = "norefferrer"
                        >
                            github.com/kamillamamatova
                        </a>
                    </p>
                    <p>
                        LinkedIn:{" "}
                        <a
                            className = "underline decoration-petal decoration-2 underline-offset-4 hover:decoration-wavy focus:ouline_none focus:ring-2 focus:ring-blush"
                            href = "https://www.linkedin.com/in/kamilla-mamatova/"
                            target = "_blank"
                            rel = "norefferrer"
                        >
                            linkedin.com/in/kamilla-mamatova
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
}