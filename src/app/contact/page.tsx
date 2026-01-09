"use client";

import { useState } from "react";
import{ Mail, Github, Linkedin, Check, FileText } from "lucide-react";

export default function ContactPage(){
    const [copied, setCopied] = useState(false);
    const email = 'kamillamamatova.km@gmail.com';

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return(
        <div className = "space-y-10">
            <header className = "space-y-3">
                <h1 className = "text-3xl font-semibold tracking-tight">Contact</h1>
                <p className = "max-w-2xl text-ink/80">
                    Best way to reach me: email.
                </p>
            </header>

            <section className = "grid gap-4 sm:grid-cols-2">

                <button
                    onClick = {handleCopy}
                    className = "group flex flex-col items-center gap-3 rounded-2xl border border-ink/10 bg-canvas p-6 text-center shadow-soft transition hover:border-petal/50 hover:bg-white focus:outline-none focus:ring-blush"
                >
                    <div className = {`rounded-full p-3 transition-all duration-300 ${copied ? 'bg-green-100 text-green-600' : 'bg-petal/20 text-ink group-hover:scale-110'}`}>
                        {copied ? <Check size={24} /> : <Mail size={24} />}
                    </div>
                    <span className = "text-sm font-medium text-ink/80">
                        {copied ? 'Copied!' : "Copy Email"}
                    </span>
                </button>

                <a 
                    href = "/resume.pdf"
                    target = "_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-ink/10 bg-canvas p-6 text-center shadow-soft transition hover:border-petal/50 hover:bg-white"
                >
                    <div className="rounded-full bg-petal/20 p-3 text-ink transition group-hover:scale-110">
                        <FileText size={24} />
                    </div>
                    <span className="text-sm font-medium text-ink/80">Resume</span>
                </a>

                {/*<a
                    href = "mailto:kamillamamatova.km@gmail.com"
                    className = "group flex flex-col items-center gap-3 rounded-2xl border border-ink/10 bg-canvas p-6 text-center shadow-soft transition hover:border-petal-50 hover:bg-white"
                >
                    <div className = "rounded-full bg-petal/20 p-3 text-ink transition group-hover:scale:110">
                        <Mail size = {24} />
                    </div>
                    <span className = "text-sm font-medium text-ink/80">Email Me</span>
                </a> */}

                <a
                    href = "https://github.com/kamillamamatova"
                    target = "_blank"
                    rel="noreferrer"
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
                    rel="noreferrer"
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