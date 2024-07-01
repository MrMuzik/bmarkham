import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return `<div class="container mx-auto p-5" data-svelte-h="svelte-18eg3wi"><div class="grid grid-cols-3 my-14"><div class="flex items-center justify-start"><nav class="border-y border-solid border-gray-500"><a class="text-white text-base font-headline" href="/">Home</a></nav></div> <div class="flex items-center justify-center"><a class="font-brandname text-3xl hover:underline" href="/">Bryan Markham</a></div> <div class="flex items-center justify-end text-base font-headline"><nav class="border-y border-solid border-gray-500"><a class="" href="https://www.instagram.com/muzik702/" target="_blank"><img class="h-6 w-6" src="%sveltekit.assets%/instagram.svg" alt="Bryan Markham (@muzik702) - Instagram"></a></nav></div></div></div> ${slots.default ? slots.default({}) : ``} <footer class="bg-gray-200"><div class="container mx-auto p-4 text-center"><small class="text-sm">© ${escape(currentYear)} Bryan Markham</small></div></footer>`;
});
export {
  Layout as default
};
