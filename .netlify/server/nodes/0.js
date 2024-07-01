

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Bi7v7vEO.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.zDYtD1mu.js"];
export const stylesheets = ["_app/immutable/assets/0.CetNJ9IJ.css"];
export const fonts = [];
