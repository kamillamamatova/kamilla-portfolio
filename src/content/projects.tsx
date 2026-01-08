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
        title: "RocketTime",
        description: "A full-stack time management application with a React dashboard, a Node.js API, and Google OAuth authentication. Built to support task tracking, goal-setting, and time logging with a focus on API design and backend reliability.",
        tags: ["TypeScript", "Node.js", "React", "MySQL2", "Google OAuth", "Express", "Google APIs", "Vite"],
        links: [
            //{ label: "Live", href: "https://"},
            { label: "Code", href: "https://github.com/kamillamamatova/rocket-time"},
        ],
        highlights: [
            "Designed and implemented backend APIs",
            "Integrated OAuth authentication",
            "Database schema and data flow decisions",
        ],
    },
    {
        title: "AI Resume Analyzer",
        description: "A resume analysis tool that uses AI to generate structured feedback on content, clarity, and formatting. Handles file parsing, text extraction, and prompt-driven evaluation through an interactive web interface.",
        tags: ["Python", "Streamlit", "OpenAI API", "PyPDF2", "Pandas", "NumPy", "Matplotlib", "Altair", "Pillow"],
        links: [
            { label: "Live", href: "https://ai-resume-analyzer-c9chdla4qiz6633ikqjdyd.streamlit.app/"},
            { label: "Code", href: "https://github.com/kamillamamatova/ai-resume-analyzer"},
        ],
        highlights: [
            "End-to-end ownership (design, implementation, deployment)",
            "AI prompt design and response handling",
            "Resume parsing and data preprocessing",
        ],
    },
    {
        title: "Job Market Insights",
        description: "A responsive job search web application that fetches real-time listings from an external API and supports filtering by role, location, job type, and remote options.",
        tags: ["JavaScript", "React", "Axios", "Tailwind CSS", "HTML5", "RapidAPI"],
        links: [
            { label: "Live", href: "https://job-market-insights.vercel.app/"},
            { label: "Code", href: "https://github.com/kamillamamatova/job-market-insights"},
        ],
        highlights: [
            "API integration and client-side data handling",
            "Filtering and state management",
            "Responsive UI design",
        ],
    },
    {
        title: "Mitsy's Print",
        description: "A PC-based, story-driven puzzle RPG built in GameMaker Studio 2. Focused on narrative systems, game state management, and branching story logic within a cohesive gameplay experience.",
        tags: ["GamerMaker Studio 2", "GML", "Git"],
        links: [
            //{ label: "Live", href: "https://ai-resume-analyzer-c9chdla4qiz6633ikqjdyd.streamlit.app/"},
            { label: "Code", href: "https://github.com/kamillamamatova/mitsys-print"},
        ],
        highlights: [
            "Game state and story system implementation",
            "Logic for puzzles and progression",
            "Systems integration across scenes and mechanics",
        ],
    },
    {
        title: "FocusUp",
        description: "A lightweight, embeddable timer designed for tracking focus sessions, daily goals, and streaks. Built to be simple, fast, and easy to integrate into browsers or productivity tools.",
        tags: ["HTML", "CSS", "Axios", "Tailwind CSS", "HTML5", "RapidAPI"],
        links: [
            //{ label: "Live", href: "https://job-market-insights.vercel.app/"},
            { label: "Code", href: "https://github.com/kamillamamatova/focusup"},
        ],
        highlights: [
            "Lightweight UI and interaction logic",
            "Session tracking and state persistence",
            "Designed for embeddability and simplicity",
        ],
    },
];