module.exports = {
    purge: [],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#cdd3dc",
                    200: "#9aa8b8",
                    300: "#687c95",
                    400: "#355171",
                    500: "#03254e",
                    600: "#021e3e",
                    700: "#02162f",
                    800: "#010f1f",
                    900: "#010710"
                },
            }
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/ui')
    ],
}
