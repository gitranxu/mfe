import Home from "pages/home"
export default {
	children: [
		{
		    path: '/test',
		    component: resolve => require(['pages/test'], resolve),
		    meta: { auth: true }
		},
		{
		    path: '/test2',
		    component: resolve => require(['pages/test/test2'], resolve),
		    meta: { auth: true }
		},
		{
		    path: '/test3',
		    component: resolve => require(['pages/test/test3'], resolve),
		    meta: { auth: true }
		},
	],
	siblings: [
		// {
		//     path: '/test',
		//     component: resolve => require(['pages/test'], resolve),
		//     meta: { auth: true }
		// },
	]
};