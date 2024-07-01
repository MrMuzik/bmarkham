import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape } from "../../chunks/ssr.js";
import { a as assets } from "../../chunks/paths.js";
import { p as page } from "../../chunks/stores.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let path;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  path = $page.url.pathname;
  $$unsubscribe_page();
  return `<div class="container mx-auto p-5"><div class="grid grid-cols-3 my-14"><div class="flex items-center justify-start"><nav class="border-y border-solid border-gray-500 py-2"><a${add_attribute("class", `text-base font-headline hover:font-bold ${path === "/resume" ? "active" : ""}`, 0)} href="/resume">Resume</a></nav></div> <div class="flex items-center justify-center" data-svelte-h="svelte-sff8h9"><a class="font-brandname text-2xl lg:text-3xl whitespace-nowrap hover:underline" href="/">Bryan Markham</a></div> <div class="flex items-center justify-end text-base font-headline" data-svelte-h="svelte-c2rkw0"><nav class=""><a class="" href="https://www.instagram.com/muzik702/" target="_blank"><img class="h-6 w-6"${add_attribute("src", `${assets}/images/instagram.svg`, 0)} alt="Bryan Markham (@muzik702) - Instagram"></a></nav></div></div></div> ${slots.default ? slots.default({}) : ``} <footer class="bg-gray-200"><div class="container mx-auto p-4 text-center"><small class="text-sm">© ${escape(currentYear)} Bryan Markham</small></div></footer>`;
});
export {
  Layout as default
};
