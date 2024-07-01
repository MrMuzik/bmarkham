import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto p-5 flex-1" data-svelte-h="svelte-ps2fms"><h1 class="font-headline">Welcome to SvelteKit</h1> <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p></div>`;
});
export {
  Page as default
};
