/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.{html,js}",
        "./public/**/*.{html,js}",
        "./src/**/*.{html,js}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "480px",
            },
        },
    },
    plugins: [],
};
