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
            colors: {
                'trust-blue': {
                    DEFAULT: '#1E40AF',
                    50: '#EFF6FF',
                    100: '#DBEAFE',
                    200: '#BFDBFE',
                    300: '#93C5FD',
                    400: '#60A5FA',
                    500: '#3B82F6',
                    600: '#2563EB',
                    700: '#1D4ED8',
                    800: '#1E40AF',
                    900: '#1E3A8A',
                },
                'wellness-green': {
                    DEFAULT: '#10B981',
                    50: '#ECFDF5',
                    100: '#D1FAE5',
                    200: '#A7F3D0',
                    300: '#6EE7B7',
                    400: '#34D399',
                    500: '#10B981',
                    600: '#059669',
                    700: '#047857',
                    800: '#065F46',
                    900: '#064E3B',
                },
                'neutral': {
                    bg: '#FFFFFF',
                    'bg-soft': '#F9FAFB',
                    text: '#111827',
                    'text-muted': '#4B5563',
                    'text-secondary': '#6B7280',
                    border: '#E5E7EB',
                },
                'dark': {
                    bg: '#0F172A',
                    text: '#F1F5F9',
                },
            },
        },
    },
    plugins: [],
}
