export type Project = {
    title: string;
    description: string;
    tags: string[];
    links: {
        label: string;
        href: string;
    }[];
    highlights?: string[];
};

export const projects: Project[] = [
    {
        title: "Project One",
        description: "I don't know. Stuff. Placeholder.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        links: [
            { label: "Live", href: "https://"},
            { label: "Code", href: "https://github.com/kamillamamatova/"},
        ],
        highlights: ["Role: solo", "Focus:"],
    },
    {
        title: "Project Two",
        description: "...",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        links: [
            { label: "Live", href: "https://"},
            { label: "Code", href: "https://github.com/kamillamamatova/"},
        ],
        highlights: ["Role: solo", "Focus:"],
    },
];