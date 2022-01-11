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
  default: () => Routes
});
var import_index_e84ab987 = __toModule(require("../../chunks/index-e84ab987.js"));
var import_ProjectsStore_65d44d12 = __toModule(require("../../chunks/ProjectsStore-65d44d12.js"));
function preload(src) {
  return new Promise(function(resolve) {
    let img = new Image();
    img.onload = resolve;
    img.src = src;
  });
}
const ProjectCard = (0, import_index_e84ab987.c)(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  let src = `/${project.icon}.png`;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  return `${function(__value) {
    if ((0, import_index_e84ab987.i)(__value)) {
      __value.then(null, import_index_e84ab987.n);
      return ``;
    }
    return function(_) {
      return `
<a class="${"m-8 transform transition-transform duration-500 relative p-6 bg-gray-100 text-gray-800 text-center rounded-3xl shadow-sm hover:shadow-md hover:scale-110 flex flex-col items-center"}"${(0, import_index_e84ab987.a)("href", `/projects/${project.id}`, 0)}><img class="${"rounded-full"}"${(0, import_index_e84ab987.a)("src", src, 0)}${(0, import_index_e84ab987.a)("alt", project.name, 0)}>
    <h2 class="${"font-black uppercase"}">${(0, import_index_e84ab987.e)(project.name)}</h2></a>
`;
    }();
  }(preload(src))}`;
});
const Routes = (0, import_index_e84ab987.c)(($$result, $$props, $$bindings, slots) => {
  let $ProjectsStore, $$unsubscribe_ProjectsStore;
  $$unsubscribe_ProjectsStore = (0, import_index_e84ab987.b)(import_ProjectsStore_65d44d12.P, (value) => $ProjectsStore = value);
  $$unsubscribe_ProjectsStore();
  return `${$$result.head += `${$$result.title = `<title>Aymen Ouali</title>`, ""}`, ""}
<div class="${"py-1 grid gap-4 md:grid-cols-3 grid-cols-2"}">${(0, import_index_e84ab987.d)($ProjectsStore, (project) => `${(0, import_index_e84ab987.v)(ProjectCard, "ProjectCard").$$render($$result, { project }, {}, {})}`)}</div>`;
});
