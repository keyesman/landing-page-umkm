/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Ini akan membaca variabel CSS --color-primary yang disuntikkan nanti di Layout
                primary: 'var(--color-primary)',
            },
            fontFamily: {
                // Kita set font default yang rapi dan aman
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}