import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","instagram.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.DXRrd1mj.js","app":"_app/immutable/entry/app.C-MHN7Lo.js","imports":["_app/immutable/entry/start.DXRrd1mj.js","_app/immutable/chunks/entry.BeggCSn6.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.C-MHN7Lo.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.zDYtD1mu.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());