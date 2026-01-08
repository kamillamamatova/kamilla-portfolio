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
        highlights: ["Role: Backend Developer"],
    },
    {
        title: "AI Resume Analyzer",
        description: "Users upload their resume and AI analyzes it and gives feedback on what they can improve.",
        tags: ["Python", "Streamlit", "OpenAI API", "PyPDF2", "Pandas", "NumPy", "Matplotlib", "Altair", "Pillow"],
        links: [
            { label: "Live", href: "https://ai-resume-analyzer-c9chdla4qiz6633ikqjdyd.streamlit.app/"},
            { label: "Code", href: "https://github.com/kamillamamatova/ai-resume-analyzer"},
        ],
        highlights: ["Role: Solo Developer"],
    },
    {
        title: "Job Market Insights",
        description: "Job Market Insights is a responsive web application built with React and Tailwind CSS that allows users to search for job listings in real-time. It fetches data from the JSearch API to provide up-to-date information, allowing users to filter by role, location, job type, and remote work options.",
        tags: ["JavaScript", "React", "Axios", "Tailwind CSS", "HTML5", "RapidAPI"],
        links: [
            { label: "Live", href: "https://job-market-insights.vercel.app/"},
            { label: "Code", href: "https://github.com/kamillamamatova/job-market-insights"},
        ],
        highlights: ["Role: Solo Developer"],
    },
    {
        title: "Mitsy's Print",
        description: "Misty’s Prints is a PC story-driven, puzzle-based RPG where the user plays as a girl named Aribel as she follows Misty, her cat, into a seemingly abandoned library. The uniqueness of this game lies in the multiple small yet distinct stories she finds herself in as she searches for her cat, allowing the player to experience multiple genres (mystery, adventure, etc.) all within one cohesive experience.",
        tags: ["GamerMaker Studio 2", "GML", "Git"],
        links: [
            //{ label: "Live", href: "https://ai-resume-analyzer-c9chdla4qiz6633ikqjdyd.streamlit.app/"},
            { label: "Code", href: "https://github.com/kamillamamatova/mitsys-print"},
        ],
        highlights: ["Role: Game Settings & Systems Integration"],
    },
    {
        title: "FocusUp",
        description: "A simple, embeddable timer for students and makers: count up to your daily goal, log sessions, and keep streaks alive. Designed for students, developers, and makers who want accountability inside Notion or the browser.",
        tags: ["HTML", "CSS", "Axios", "Tailwind CSS", "HTML5", "RapidAPI"],
        links: [
            //{ label: "Live", href: "https://job-market-insights.vercel.app/"},
            { label: "Code", href: "https://github.com/kamillamamatova/focusup"},
        ],
        highlights: ["Role: Solo Developer"],
    },
];