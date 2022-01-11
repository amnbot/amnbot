var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  P: () => ProjectsStore
});
var import_index_e84ab987 = __toModule(require("./index-e84ab987.js"));
const subscriber_queue = [];
function writable(value, start = import_index_e84ab987.n) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if ((0, import_index_e84ab987.f)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = import_index_e84ab987.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_e84ab987.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
const ProjectsStore = writable([
  {
    id: "personal-website",
    name: "Personal Website",
    dates: "January 2022 - In progress!",
    description: "You are here! This is where I showcase some of my projects!",
    icon: "amnbot",
    stack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
    ],
    links: [{ type: "GitHub", link: "https://github.com/amnbot" }]
  },
  {
    id: "ndl-k-arcade",
    name: "NDL:k-Arcade",
    dates: "April 2021 - In progress!",
    description: "As the name implies, this application is not a single game, but a bunch of games all in one place! All games are K-Pop related. For now, users can put their K-Pop related knowledge to the test by answering randomly generated questions. They can also play Save One Drop One, where they choose their favorite of two randomly selected K-Pop songs.",
    icon: "ndl-k",
    stack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
    ],
    links: [{ type: "GitHub", link: "https://github.com/amnbot" }]
  },
  {
    id: "typing-speed-game",
    name: "Typing Speed Game",
    dates: "February 19-21, 2021",
    description: "A team project submitted for SacHacks 2021! It is a simple speed typing game with random, challenging promps.",
    icon: "typingspeed",
    stack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    ],
    links: [{ type: "GitHub", link: "https://github.com/amnbot/TypingSpeedTest" }]
  },
  {
    id: "sudoku-solver",
    name: "Sudoku Solver",
    dates: "February 2021",
    description: "A simple sudoku solver implemented using a recursive algorithm and PyGame for the user interface.",
    icon: "sudoku",
    stack: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"],
    links: [{ type: "GitHub", link: "https://github.com/amnbot/SudokuSolver" }]
  },
  {
    id: "anime-save-one-drop-one",
    name: "Anime Save One Drop One",
    dates: "January 2021",
    description: "A website created with Blazor WebAssembly that allows users to choose their favorite of two japanese animation characters. It was implemented using the Jikan API, an unofficial API for MyAnimeList.",
    icon: "anime",
    stack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
    ],
    links: [{ type: "GitHub", link: "https://github.com/amnbot/AnimeSaveOneDropOne" }]
  },
  {
    id: "slashy",
    name: "Slashy",
    dates: "October 2020",
    description: "A hyper-casual game made with Unity, available both on itch.io and on the Google Play Store!",
    icon: "slashy",
    stack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
    ],
    links: [
      { type: "Link", link: "https://amnbot.itch.io/slashy" },
      {
        type: "GooglePlay",
        link: "https://play.google.com/store/apps/details?id=com.NDLAMN.Slashy"
      }
    ]
  }
]);
