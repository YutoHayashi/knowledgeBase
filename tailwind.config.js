module.exports = {
    purge: [ './src/**/*.{js,jsx,ts,tsx}' ],
    theme: {
        fontFamily: {
            ui: [ 'Segoe UI', 'meiryo', 'yu gothic', 'hiragino kaku gothic pron', 'sans-serif' ],
        },
        extend: {
            fontSize: Object.assign( {
                base: '62.5%',
            }, ...Array.from( Array( 40 ) ).map( ( _, i ) => ( { [ i ]: `${ ( i * .1 ).toPrecision( 2 ) }rem` } ) ), ),
            maxWidth: {
                'inner': '1280px',
            },
            colors: {
                transparent: 'transparent',
                primary: '#1A4378',
                secondary: '#EFF2F6',
            },
        },
    },
    variants: {
        extend: {  },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
