import { writable } from 'svelte/store';

export const ProjectsStore = writable([
	{
		id: 'pozz',
		name: 'POZZ',
		dates: 'October 1-2 2022',
		description: 'When working on computers, we tend to slouch after some amount of time without realizing it. For MAIS Hacks 2022, my team and I designed a deep learning model to detect whether or not the person in front of the camera is sitting correctly. If the posture is bad for a certain duration, the user is notified through SMS.',
		icon: 'pozz',
		stack: [
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
		],
		links: [{ type: 'GitHub', link: 'https://github.com/amnbot/Pozz' },
				{type: 'Link', link: 'https://devpost.com/software/pozz?ref_content=my-projects-tab&ref_feature=my_projects'}],
		images: [
			{ title: 'image', src: '/pozz/Screenshot_1.png' },
		]
	},
	{
		id: 'personal-website',
		name: 'Personal Website',
		dates: 'January 2022 - In progress!',
		description: 'You are here! This is where I showcase some of my projects!',
		icon: '',
		stack: [
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
		],
		links: [{ type: 'GitHub', link: 'https://github.com/amnbot' }],
		images: [
			{ title: 'image', src: '' },
			{ title: 'image', src: '' },
			{ title: 'image', src: '' }
		]
	},
	{
		id: 'storyholic',
		name: 'StoryHolic',
		dates: 'February 25-27, 2022 - In progress!',
		description:
			'Storyholic is a website that allows its users to create stories together. Each user can submit a scene to begin a new story, or to append to an existing one. Then, users may read stories submitted to the website as chains of different scenes, traversing through the many different possible paths submitted by our many users.\nTo read through the stories and their different outcomes, go to the homepage and browse either by scene name or by tags. You will be able to create new branches for the story you decide to read. If you wish to create a new story, simply go to the create page and submit your very own original story!',
		icon: 'storyholic',
		stack: [
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
		],
		links: [
			{ type: 'Link', link: 'https://storyholic.netlify.app/' },
			{ type: 'GitHub', link: 'https://github.com/amnbot/CodeJamXI' }
		],
		images: [
			{ title: 'image', src: '/storyholic/1.jpg' },
			{ title: 'image', src: '/storyholic/2.jpg' },
			{ title: 'image', src: '/storyholic/3.jpg' },
			{ title: 'image', src: '/storyholic/4.jpg' },
			{ title: 'image', src: '/storyholic/5.jpg' },
			{ title: 'image', src: '/storyholic/6.jpg' },
			{ title: 'image', src: '/storyholic/7.jpg' },
			{ title: 'image', src: '/storyholic/8.jpg' }
		]
	},
	{
		id: 'ndl-k-arcade',
		name: 'NDL:k-Arcade',
		dates: 'April 2021 - April 2022',
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
		links: [{ type: 'GitHub', link: 'https://github.com/amnbot' }],
		images: [
			{ title: 'image', src: '/ndl-k/1.jpg' },
			{ title: 'image', src: '/ndl-k/2.jpg' },
			{ title: 'image', src: '/ndl-k/3.jpg' },
			{ title: 'image', src: '/ndl-k/4.jpg' },
			{ title: 'image', src: '/ndl-k/5.jpg' },
			{ title: 'image', src: '/ndl-k/6.jpg' }
		]
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
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
			'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
		],
		links: [{ type: 'GitHub', link: 'https://github.com/amnbot/TypingSpeedTest' }],
		images: [{ title: 'image', src: '/typingspeed/typing.jpg' }]
	},
	{
		id: 'sudoku-solver',
		name: 'Sudoku Solver',
		dates: 'February 2021',
		description:
			'A simple sudoku solver implemented using a recursive algorithm and PyGame for the user interface.',
		icon: 'sudoku',
		stack: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'],
		links: [{ type: 'GitHub', link: 'https://github.com/amnbot/SudokuSolver' }],
		images: [
			{ title: 'image', src: '/sudoku/Screenshot_1.png' },
			{ title: 'image', src: '/sudoku/Screenshot_4.png' }
		]
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
		links: [{ type: 'GitHub', link: 'https://github.com/amnbot/AnimeSaveOneDropOne' }],
		images: [
			{ title: 'image', src: '/anime/Screenshot_1.png' },
			{ title: 'image', src: '/anime/Screenshot_2.png' },
			{ title: 'image', src: '/anime/Screenshot_3.png' }
		]
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
		],
		images: [
			{ title: 'image', src: '/slashy/unnamed.webp' },
			{ title: 'image', src: '/slashy/unnamed (1).webp' },
			{ title: 'image', src: '/slashy/unnamed (2).webp' },
			{ title: 'image', src: '/slashy/unnamed (3).webp' }
		]
	}
]);
