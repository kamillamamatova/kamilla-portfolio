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
        },
    },
    plugins: [],
};

export default config;