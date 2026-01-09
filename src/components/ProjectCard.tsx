"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/content/projects";

/*interface ProjectProps {
    title: string;
    description: string;
    images = string[];
    //tags: string[];
    links: {
        label: string;
        href: string;
    }[];
    highlights?: string[];
}*/

export default function ProjectCard({ project }: { project: Project}){
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next image
    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) =>
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    // Function to go to the previous image
    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    return(
        <article className = "group relative rounded-3xl border border-ink/5 bg-canvas/50 p-6 shadow-sm transition hover:shadow-soft hover:bg-canvas/60 backdrop-blur-sm">
            {/* Image Carousel */}
            {/* Only renders if there are images */}
            {project.images && project.images.length > 0 && (
                <div className = "relative mb-6 h-48 w-full overflow-hidden rounded-xl bg-ink/5">
                    <Image
                        src = {project.images[currentIndex]}
                        alt = {`${project.title} screenshot`}
                        fill
                        className = "object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Renders arrows only if there is more than 1 image */}
                    {project.images && project.images.length > 1 && (
                        <>
                            {/* Left Arrow */}
                            <button
                                onClick = {prevImage}
                                className = "absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-canvas/40 p-1.5 text-ink/70 backdrop-blur-sm opacity-0 transition-all duration-300 hover:bg-canvas/90 hover:scale-110 hover:text-ink group-hover:opacity-100"
                                aria-label = "Previous Image"
                            >
                                <svg xmlns = "http://www.w3.org/2000/svg" fill = "none" viewBox = "0 0 24 24" strokeWidth = {2} stroke = "currentColor" className = "h-4 w-4">
                                    <path strokeLinecap = "round" strokeLinejoin = "round" d = "M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>

                            {/* Right Arrow */}
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-canvas/40 p-1.5 text-ink/70 backdrop-blur-sm opacity-0 transition-all duration-300 hover:bg-canvas/90 hover:scale-110 hover:text-ink group-hover:opacity-100"
                                aria-label="Next Image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>

                            {/* Tiny indicator dots */}
                            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                {project.images.map((_, idx) => (
                                    <div 
                                        key={idx}
                                        className={`h-1.5 w-1.5 rounded-full shadow-sm ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}

            <header className = "space-y-2">
                <h2 className = "text-xl font-serif font-medium tracking-wide text-ink">{project.title}</h2>
                <p className = "text-sm leading-relaxed text-ink/75">{project.description}</p>
            </header>

            <div className = "mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                    <span
                        key = {t}
                        className = "rounded-full border border-ink/10 bg-petal/50 px-3 py-1 text-xs text-ink/75"
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
                        className = "text-sm underline decoration-petal decoration-2 underline-offset-4 hover:decoration-wavy focus:ring-2 focus:ring-blush"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </article>
    );
}