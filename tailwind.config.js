/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Exo 2"', 'sans-serif'],
                display: ['Orbitron', 'sans-serif'],
            },
            colors: {
                'hbs-crimson': '#A51C30',
                'neon-blue': '#0041FF',
            },
            backgroundImage: {
                'glow-vignette': 'radial-gradient(circle at center, transparent 0%, #000000 100%)',
            }
        },
    },
    plugins: [],
}
