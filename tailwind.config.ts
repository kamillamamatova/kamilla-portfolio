import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            colors: {
                ink: "#3E2723", // Espresso
                canvas: "#F5F1E6", // Soft linen
                petal: "#F9A8BB", // Cherry blossom
                peony: "#F4C9D6",
                blush: "#E36887",
            },
            boxShadow: {
                soft: "0 10px 30px rgba(62, 39, 35, 0.08)",
            },
            fontFamily: {
                sans: ["var(--font-sans)"],
                serif: ["var(--font-serif)"],
            },

            animation: {
                'fade-in': 'fadeInUp 0.8s ease-out forwards',
            },
            keyFrames: {
                fadeInUp: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(10px)',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateY(0)',
                    },
                },
            },
        },
    },
    plugins: [],
};

export default config;