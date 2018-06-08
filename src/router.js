const routers = [{
    path: '/',
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/mune',
    component: resolve => require(['./views/component/mune.vue'], resolve),
    children: [{
            path: '/roleList',
            component: resolve => require(['./views/component/role/roleList.vue'], resolve)
        }
    ]
}
];

//这个很重要，去了就运行不了
export default routers;