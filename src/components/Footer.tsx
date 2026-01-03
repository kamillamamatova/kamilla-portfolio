"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer(){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Only shows the back to top button when the user has scrolled down 100px
            if(window.scrollY > 100){
                setIsVisible(true);
            }
            else{
                setIsVisible(false);
            }
        };

        // Adds the event listener when the component mounts
        window.addEventListener('scroll', toggleVisibility);

        // Cleans up the listener when the component unmounts
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return(
        <footer className = "border-t border-ink/10 mt-20">
            <div className = "mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-8 text-center text-sm text-ink/60 md:flex-row md:items-left md:justify-between">
                <p>© {new Date().getFullYear()} Kamilla Mamatova</p>
                

                <div className = "flex items-center gap-6">
                    <a
                        href = "https://github.com/kamillamamatova"
                        target = "_blank"
                        rel = "noopener noreferrer"
                        className = "transition hover:text-ink hover:scale-110"
                        aria-label = "GitHub"
                    >
                        <Github size = {20} />
                    </a>
                    <a
                        href = "https://www.linkedin.com/in/kamilla-mamatova/"
                        target = "_blank"
                        rel = "noopener noreferrer"
                        className = "transition hover:text-ink hover:scale-110"
                        aria-label = "LinkedIn"
                    >
                        <Linkedin size = {20} />
                    </a>
                </div>

                <p className = "font-serif italic text-ink/50">
                    Thanks for dropping by!
                </p>
            </div>

            {isVisible && (
                <div className = "flex justify-center pb-8 animate-fade-in-up">
                    <button
                        onClick = {scrollToTop}
                        className = "rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink/60 shadow-sm transition hover:-translate-y-1 hover:text-ink hover:shadow-md focus-:outline-none focus:ring-2 focus:ring-blush"
                        aria-label = "Scroll to top"
                    >
                        ↑ Top
                        </button>
                </div>
            )}
        </footer>
    );
}