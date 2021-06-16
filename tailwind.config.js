module.exports = {
    mode: 'jit',
    purge: [
        './themes/site/**/*.ss',
        './themes/site/**/*.js',
        './themes/site/**/*.jsx',
        './themes/site/**/*.ts',
        './themes/site/**/*.tsx',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Inter', 'Helvetica', 'arial', 'sans-serif'],
            serif: ['Georgia', 'serif'],
        },
        container: {
            center: true,
            padding: '1.25rem',
        },
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        color: 'inherit',
                        a: {
                            color: 'blue',
                            '&:hover': {
                                color: 'darkblue',
                            },
                        },
                    },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
};
