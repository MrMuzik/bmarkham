export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","_redirects","favicon.png","images/bmarkham-headshot.jpg","images/instagram.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.oZNOlnsr.js","app":"_app/immutable/entry/app.rW59qh3Z.js","imports":["_app/immutable/entry/start.oZNOlnsr.js","_app/immutable/chunks/entry.B2GQhkGy.js","_app/immutable/chunks/scheduler.I48gaNEn.js","_app/immutable/chunks/paths.BlSi3mWA.js","_app/immutable/entry/app.rW59qh3Z.js","_app/immutable/chunks/scheduler.I48gaNEn.js","_app/immutable/chunks/index.Ck3LfvZ6.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
