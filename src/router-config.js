const Index = resolve => require(['./components/HelloFromVux'], resolve)
const home = resolve => require(['./components/home'], resolve)
const list = resolve => require(['./components/list'], resolve)
const mine = resolve => require(['./components/mine'], resolve)
const detail = resolve => require(['./components/detail'], resolve)
const haha = resolve => require(['./components/haha'], resolve)
const liantian = resolve => require(['./components/liantian'], resolve)
const zhanghu = resolve => require(['./components/zhanghu'], resolve)
const aa = resolve => require(['./components/aa'], resolve)
const routes = [
{
	path: "/",
	redirect: "/index"
},
{
	path: "/index",
	component: Index,
	children: [
		{
			path: "",
			component: home
		},
		{
			name: "home",
			path: "home",
			component: home
		},
		{
			name: "list",
			path: "list",
			component: list
		},
		{
			name: "mine",
			path: "mine",
			component: mine
		},
		{
			name: "haha",
			path: "haha",
			component: haha
		}

	]
	},	


	{
			name: "liantian",
			path: "/liantian",
			component: liantian
	},
	{
			name: "zhanghu",
			path: "/zhanghu",
			component: zhanghu
	},
	{
			name: "aa",
			path: "/aa",
			component: aa
	},

	{
		path: "/detail",
		component: detail
	}
]

module.exports = routes
