

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Ce9ZqWtX.js","_app/immutable/chunks/scheduler.I48gaNEn.js","_app/immutable/chunks/index.Ck3LfvZ6.js","_app/immutable/chunks/paths.C_V2A23l.js"];
export const stylesheets = [];
export const fonts = [];
