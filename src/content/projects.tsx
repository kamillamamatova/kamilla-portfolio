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
        description: "A full-stack time management and goal-setting application featuring a React dashboard, a Node.js API with Google OAuth, and an AI-powered chat assistant for managing tasks and time logs.",
        tags: ["TypeScript", "Node.js", "React", "MySQL2", "Google OAuth", "Express", "Google APIs", "Vite"],
        links: [
            //{ label: "Live", href: "https://"},
            { label: "Code", href: "https://github.com/kamillamamatova/rocket-time"},
        ],
        highlights: ["Role: Backend", "Focus:"],
    },
    {
        title: "AI Resume Analyzer",
        description: "Users upload their resume and AI analyzes it and gives feedback on what they can improve.",
        tags: ["Python", "Streamlit", "OpenAI API", "PyPDF2", "Pandas", "NumPy", "Matplotlib", "Altair", "Pillow"],
        links: [
            { label: "Live", href: "https://ai-resume-analyzer-c9chdla4qiz6633ikqjdyd.streamlit.app/"},
            { label: "Code", href: "https://github.com/kamillamamatova/ai-resume-analyzer"},
        ],
        highlights: ["Role: Solo", "Focus:"],
    },
];