/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx}",
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
	],
	plugins: [
		require('flowbite/plugin')
  ],

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
			'3xl': ['40px', { lineHeight: '48px' }],
			'largest': ['112px', { lineHeight: '130px' }]
		}
	}
}
