/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './docs/**/!(*.d).{ts,vue,md}',
        './docs/.vitepress/**/!(*.d).{ts,vue,md}',
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['"Josefin Sans"', 'sans-serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
