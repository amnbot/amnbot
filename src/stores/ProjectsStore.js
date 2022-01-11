import { writable } from 'svelte/store';

export const ProjectsStore = writable([
	{
		id: 'personal-website',
		name: 'Personal Website',
		dates: 'January 2022 - In progress!',
		description: 'You are here! This is where I showcase some of my projects!',
		icon: 'amnbot',
		stack: [
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
		],
		links: [{ type: 'GitHub', link: 'https://github.com/amnbot' }]
	},
	{
		id: 'ndl-k-arcade',
		name: 'NDL:k-Arcade',
		dates: 'April 2021 - In progress!',
		description:
			'As the name implies, this application is not a single game, but a bunch of games all in one place! All games are K-Pop related. For now, users can put their K-Pop related knowledge to the test by answering randomly generated questions. They can also play Save One Drop One, where they choose their favorite of two randomly selected K-Pop songs.',
		icon: 'ndl-k',
		stack: [
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
		],
		links: [{ type: 'GitHub', link: 'https://github.com/amnbot' }]
	},
	{
		id: 'typing-speed-game',
		name: 'Typing Speed Game',
		dates: 'February 19-21, 2021',
		description:
			'A team project submitted for SacHacks 2021! It is a simple speed typing game with random, challenging promps.',
		icon: 'typingspeed',
		stack: [
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
		],
		links: [{ type: 'GitHub', link: 'https://github.com/amnbot/TypingSpeedTest' }]
	},
	{
		id: 'sudoku-solver',
		name: 'Sudoku Solver',
		dates: 'February 2021',
		description:
			'A simple sudoku solver implemented using a recursive algorithm and PyGame for the user interface.',
		icon: 'sudoku',
		stack: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'],
		links: [{ type: 'GitHub', link: 'https://github.com/amnbot/SudokuSolver' }]
	},
	{
		id: 'anime-save-one-drop-one',
		name: 'Anime Save One Drop One',
		dates: 'January 2021',
		description:
			'A website created with Blazor WebAssembly that allows users to choose their favorite of two japanese animation characters. It was implemented using the Jikan API, an unofficial API for MyAnimeList.',
		icon: 'anime',
		stack: [
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
		],
		links: [{ type: 'GitHub', link: 'https://github.com/amnbot/AnimeSaveOneDropOne' }]
	},
	{
		id: 'slashy',
		name: 'Slashy',
		dates: 'October 2020',
		description:
			'A hyper-casual game made with Unity, available both on itch.io and on the Google Play Store!',
		icon: 'slashy',
		stack: [
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg'
		],
		links: [
			{ type: 'Link', link: 'https://amnbot.itch.io/slashy' },
			{
				type: 'GooglePlay',
				link: 'https://play.google.com/store/apps/details?id=com.NDLAMN.Slashy'
			}
		]
	}
]);
