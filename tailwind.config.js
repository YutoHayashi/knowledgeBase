const colors = require( 'tailwindcss/colors' );
module.exports = {
    purge: [ './src/**/*.{js,jsx,ts,tsx}' ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {  },
        colors: {
            ...colors,
            white: '#FFFFFF',
            transparent: 'transparent',
            primary: '#1A4378',
            secondary: '#EFF2F6',
        },
        maxWidth: {
            'inner': '1280px',
        },
    },
    variants: {
        extend: {  },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
