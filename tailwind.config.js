/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}"],

	theme: {
		extend: {},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},


		fontSize: {
			base: '16px',
			lg: ['18px', { lineHeight: '22px' }],
			xl: ['20px', { lineHeight: '25px' }],
			'2xl': ['30px', { lineHeight: '38px' }],
			'3xl': ['40px', { lineHeight: '48px' }]
		}
	},
	plugins: [
		require('flowbite/plugin')
	]
}
