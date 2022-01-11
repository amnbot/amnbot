module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		fontFamily: {
			'encode-sans': ['encode sans', 'sans-serif']
		},
		extend: {
			padding: {
				'1/2': '50%',
				full: '100%'
			}
		}
	}
};
