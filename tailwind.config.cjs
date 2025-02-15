/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**"],
    theme: {
        extend: {
            fontFamily: {
                title: "'Luckiest Guy', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                main: "'Highway Gothic', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
            },
            backgroundColor: {
                dark: "rgb(10 12 14)",
                light: "rgb(250 250 250)",
                honey: "rgb(255, 231, 12)",
                "honey-amber": "rgb(251, 202, 31)",
                hive: "rgb(146, 121, 27)"
            },
            ringColor: {
                dark: "rgb(10 12 14)",
                honey: "rgb(255, 231, 12)",
                "honey-amber": "rgb(251, 202, 31)",
                light: "rgb(250 250 250)"
            },
            ringOffsetColor: {
                honey: "rgb(255, 231, 12)",
                "honey-amber": "rgb(251, 202, 31)",
                light: "rgb(250 250 250)"
            },
            textColor: {
                dark: "rgb(10 12 14)",
                light: "rgb(250 250 250)"
            },
            borderColor: {
                dark: "rgb(10 12 14)",
                hive: "rgb(131, 108, 25)"
            },
            gradientColorStops: {
                dark: "rgb(10 12 14)"
            },
            fill: {
                hive: "rgba(119,100,33,255)",
                light: "rgb(250 250 250)"
            },
            stroke: {
                hive: "rgba(101,86,27,186)",
                "hive-active": "rgba(0,255,1,255)",
                "hive-gifted": "rgb(251,251,22)",
                dark: "rgb(10 12 14)"
            },
            strokeWidth: {
                "1/6": ".16px",
                "1/2": ".5px"
            }
        }
    },
    plugins: []
};
