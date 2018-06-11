const routers = [{
        path: '/',
        component: (resolve) => require(['./views/index.vue'], resolve)
    },{
        path: '/mune',//父路
        component: resolve => require(['./views/component/mune.vue'], resolve),
        children: [
            //这个是我们的系统管理当中的相关rul
            {
                path: '/roleList',
                component: resolve => require(['./views/component/role/roleList.vue'], resolve)
            },{ //是我们的用户管理url
                path: '/userManager',
                component: resolve => require(['./views/component/role/roleList.vue'], resolve)
            },{//是我们的角色管理url
                path: '/roleManager',
                component: resolve => require(['./views/component/role/roleList.vue'], resolve)
            },{ //权限管理url
                path: '/functionManager',
                component: resolve => require(['./views/component/role/roleList.vue'], resolve)
            },
            //这个是我们的基础设置当中的相关rul
            {  //用户数据url
                path: '/userData',
                component: resolve => require(['./views/component/role/roleList.vue'], resolve)
            },{
                //商品档案url
                path: '/productArchives',
                component: resolve => require(['./views/component/role/roleList.vue'], resolve)
            },{ //仓库数据url
                path: '/WarehouseData',
                component: resolve => require(['./views/component/role/roleList.vue'], resolve)
            },{
                //客户数据
                path: '/customData',
                component: resolve => require(['./views/component/role/roleList.vue'], resolve)
            },{
                //供应商数据
                path: '/supperData',
                component: resolve => require(['./views/component/role/roleList.vue'], resolve)
            },{
                //登录人数统计
                path: '/LoginNumData',
                component: resolve => require(['./views/component/charts/loginNumStat.vue'], resolve)
            },{
                //产品销售统计
                path: '/productStat',
                component: resolve => require(['./views/component/role/roleList.vue'], resolve)
            },{//用户行为统计
                path: '/userConduct',
                component: resolve => require(['./views/component/role/roleList.vue'], resolve)
            },{//客户分布统计
                path: '/customeDistribution',
                component: resolve => require(['./views/component/role/roleList.vue'], resolve)
            }
        ]
    },{
        path: '/registerUser',
        component: resolve => require(['./views/component/registerUser.vue'], resolve)
    },{
        path: '/index',
        component: (resolve) => require(['./views/index.vue'], resolve) 
    }
];

//这个很重要，去了就运行不了
export default routers;