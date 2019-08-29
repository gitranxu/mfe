import Home from "pages/home"
export default {
	children: [
		
	],
	siblings: [
		{
		    path: '/test',
		    component: resolve => require(['pages/test'], resolve),
		    meta: { auth: true }
		},
	]
};