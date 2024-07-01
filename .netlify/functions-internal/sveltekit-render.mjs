import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "bmarkham/_app",
	assets: new Set([".DS_Store","favicon.png","images/bmarkham-headshot.jpg","images/instagram.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.Cu6W3bF7.js","app":"_app/immutable/entry/app.aCLSKMqA.js","imports":["_app/immutable/entry/start.Cu6W3bF7.js","_app/immutable/chunks/entry.Dq05423J.js","_app/immutable/chunks/scheduler.I48gaNEn.js","_app/immutable/chunks/paths.DAyCLQCv.js","_app/immutable/entry/app.aCLSKMqA.js","_app/immutable/chunks/scheduler.I48gaNEn.js","_app/immutable/chunks/index.Ck3LfvZ6.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js'))
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
})());
