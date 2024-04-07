export default {
    keyframes: {
        "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
        },
        "caret-blink": {
            "0%,70%,100%": { opacity: "1" },
            "20%,50%": { opacity: "0" },
        },
        enter: {
            "0%": {
                opacity: "var(--tw-enter-opacity,1)",
                transform: "translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0) scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1)) rotate(var(--tw-enter-rotate,0))",
            },
        },
        exit: {
            to: {
                opacity: "var(--tw-exit-opacity,1)",
                transform: "translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0) scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1)) rotate(var(--tw-exit-rotate,0))",
            },
        },
        fadeIn: {
            from: {
                opacity: 0,
              },
              to: {
                opacity: 1,
              },
        },
        fadeOut: {
            from: {
                opacity: 1,
              },
              to: {
                opacity: 0,
              },
        },
    },
    animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        in: "enter .15s",
        out: "exit .15s",
    },
}
