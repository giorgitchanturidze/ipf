/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./*.{html,js}"],
    theme: {
        extend: {
            screens: {
                xl: "1440px",
            },
            colors: {
                arctic: "#DDE5ED",
                brightBlue: "#0074F0",
                darkBlue: "#005EB8",
                secondary: "#616161",
                fire: "#FF3B00",
                night: "#002677",
                brightBlack: "#1B2F44",
            },
        },
    },
    plugins: [],
}
