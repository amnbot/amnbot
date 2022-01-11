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
  default: () => U5Bidu5D,
  load: () => load
});
var import_index_e84ab987 = __toModule(require("../../../chunks/index-e84ab987.js"));
var import_ProjectsStore_65d44d12 = __toModule(require("../../../chunks/ProjectsStore-65d44d12.js"));
const DescriptionCard = (0, import_index_e84ab987.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"bg-white rounded-3xl p-4 my-4 w-12/12 items-center flex flex-col"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const ProjectStack = (0, import_index_e84ab987.c)(($$result, $$props, $$bindings, slots) => {
  let { stack } = $$props;
  if ($$props.stack === void 0 && $$bindings.stack && stack !== void 0)
    $$bindings.stack(stack);
  return `<div class="${"flex flex-row items-center"}">${(0, import_index_e84ab987.d)(stack, (fw) => `<img class="${"w-32 m-5 transition-transform hover:scale-110"}"${(0, import_index_e84ab987.a)("src", fw, 0)} alt="${"image"}">`)}</div>`;
});
const Link = (0, import_index_e84ab987.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  return `<svg${(0, import_index_e84ab987.a)("width", width, 0)}${(0, import_index_e84ab987.a)("height", height, 0)}${(0, import_index_e84ab987.a)("viewBox", viewBox, 0)}><path d="${"M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"}"${(0, import_index_e84ab987.a)("fill", color, 0)}></path></svg>`;
});
const GooglePlay = (0, import_index_e84ab987.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  return `<svg${(0, import_index_e84ab987.a)("width", width, 0)}${(0, import_index_e84ab987.a)("height", height, 0)}${(0, import_index_e84ab987.a)("viewBox", viewBox, 0)}><path d="${"M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"}"${(0, import_index_e84ab987.a)("fill", color, 0)}></path></svg>`;
});
const ProjectLinks = (0, import_index_e84ab987.c)(($$result, $$props, $$bindings, slots) => {
  let { links } = $$props;
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  return `<div class="${"flex flex-row items-center"}">${(0, import_index_e84ab987.d)(links, (link) => `${link.type === "GitHub" ? `<div class="${"w-20 transform transition-transform hover:scale-110 mx-4"}"><a target="${"_blank"}" class="${"transform transition-transform hover:scale-110 mx-4 text-lg"}"${(0, import_index_e84ab987.a)("href", link.link, 0)}><svg class="${"fill-black"}" viewBox="${"0 0 128 128"}"><g><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}"></path><path d="${"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"}"></path></g></svg></a>
    </div>` : ``}
    ${link.type === "Link" ? `<div class="${"my-4 min-w-max flex justify-center transform transition-transform hover:scale-110 mx-4"}"><a target="${"_blank"}" class="${"transform transition-transform hover:scale-110 mx-4 text-lg"}"${(0, import_index_e84ab987.a)("href", link.link, 0)}>${(0, import_index_e84ab987.v)(Link, "Link").$$render($$result, { size: "60" }, {}, {})}</a>
    </div>` : ``}
    ${link.type === "GooglePlay" ? `<div class="${"my-4 min-w-max flex justify-center transform transition-transform hover:scale-110 mx-4"}"><a target="${"_blank"}" class="${"transform transition-transform hover:scale-110 mx-4 text-lg"}"${(0, import_index_e84ab987.a)("href", link.link, 0)}>${(0, import_index_e84ab987.v)(GooglePlay, "GooglePlay").$$render($$result, { size: "60" }, {}, {})}</a>
    </div>` : ``}`)}</div>`;
});
async function load({ url, params }) {
  const id = params.id;
  return { props: { id } };
}
function preload(src) {
  return new Promise(function(resolve) {
    let img = new Image();
    img.onload = resolve;
    img.src = src;
  });
}
const U5Bidu5D = (0, import_index_e84ab987.c)(($$result, $$props, $$bindings, slots) => {
  let $ProjectsStore, $$unsubscribe_ProjectsStore;
  $$unsubscribe_ProjectsStore = (0, import_index_e84ab987.b)(import_ProjectsStore_65d44d12.P, (value) => $ProjectsStore = value);
  let { id } = $$props;
  let project = $ProjectsStore.filter((proj) => proj.id == id)[0];
  let src = `/${project.icon}.png`;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$unsubscribe_ProjectsStore();
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_e84ab987.e)(project.name)}</title>`, ""}`, ""}

${function(__value) {
    if ((0, import_index_e84ab987.i)(__value)) {
      __value.then(null, import_index_e84ab987.n);
      return ``;
    }
    return function(_) {
      return `
<div class="${"py-8"}">${(0, import_index_e84ab987.v)(DescriptionCard, "DescriptionCard").$$render($$result, {}, {}, {
        default: () => `<div><h2 class="${"text-center text-5xl font-encode-sans font-black text-[#171717] uppercase tracking-tighter"}">${(0, import_index_e84ab987.e)(project.name)}</h2>
            <h2 class="${"text-center text-3xl font-encode-sans font-black text-[#171717] uppercase tracking-wider my-3"}">${(0, import_index_e84ab987.e)(project.dates)}</h2></div>
        <p class="${"p-8 text-3xl my-4 text-center text-[#171717]"}">${(0, import_index_e84ab987.e)(project.description)}</p>
            <img class="${"w-1/4 rounded-full"}"${(0, import_index_e84ab987.a)("src", src, 0)}${(0, import_index_e84ab987.a)("alt", project.name, 0)}>
        ${(0, import_index_e84ab987.v)(ProjectLinks, "ProjectLinks").$$render($$result, { links: project.links }, {}, {})}`
      })}
    ${(0, import_index_e84ab987.v)(DescriptionCard, "DescriptionCard").$$render($$result, {}, {}, {
        default: () => `${(0, import_index_e84ab987.v)(ProjectStack, "ProjectStack").$$render($$result, { stack: project.stack }, {}, {})}`
      })}</div>
`;
    }();
  }(preload(src))}`;
});
