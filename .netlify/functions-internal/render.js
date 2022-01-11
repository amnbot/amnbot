const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["amnbot.png","anime.png","favicon.png","icons.psd","ndl-k.png","slashy.png","sudoku.png","typingspeed.png","unnamed.webp"]),
	_: {
		mime: {".png":"image/png",".psd":"image/vnd.adobe.photoshop",".webp":"image/webp"},
		entry: {"file":"start-b5d3f9a3.js","js":["start-b5d3f9a3.js","chunks/vendor-679314f3.js"],"css":["assets/start-d5b4de3e.css"]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				a: [0,4],
				b: [1]
			}
		]
	}
});
