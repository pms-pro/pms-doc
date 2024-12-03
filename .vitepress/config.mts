import {defineConfig} from 'vitepress';
import './hello.js'

/**
 * 配置VitePress应用的参数
 *
 * @returns {object} VitePress配置对象
 * @author xyqierkang@163.com
 */

export default defineConfig({
    title: 'PMS用户帮助文档10',
    description: '南京中造软件有限公司｜开箱即用的数据建模平台',
    srcDir: './docs',
    titleTemplate: false, // 禁用网页标题后缀
    appearance: false, // 默认配置，可以切换,true: 默认配置,false: 禁用主题切换，只使用默认的配置；dark: 默认使用深色模式，支持切换
    // base: '/./', // 组织发布到GitPage
    base: '/pms-doc/', // 个人发布到GitPage
    // base: '/pms-doc/.vitepress/dist/', // 发布本地访问静态地址
    server: {
        host: '0.0.0.0', // 绑定到所有网络接口
        port: 5173,// 监听的端口
    },
    themeConfig: {
        search: {
            provider: 'local',
            options: {
                disableDetailedView: true,
                detailedView: true,
                translations: {
                    button: {
                        buttonText: "搜索内容",
                        buttonAriaLabel: "搜索内容",
                    },
                    modal: {
                        noResultsText: "无法找到相关结果",
                        resetButtonTitle: "清除查询条件",
                        footer: {
                            selectText: "选择",
                            navigateText: "切换",
                        },
                    },
                },
            },
        },
        logo: '/images/logo-circle.svg',
        footer: {
            message: '© 2024 南京中造软件有限公司',
            copyright: '<a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2023031871号</a>',
        },
        nav: [
            {
                text: '运营系统',
                link: 'http://www.zhgcraft.com',
            },
            {
                text: '测试系统',
                link: 'https://ceshib.zhgcraft-pms.com/login',
            },
        ],
        outline: {
            level: [2, 6],
        },
        sidebar: [
            {
                text: '首页',
                link: '/基础设置/首页.md',
                items: [
                    {
                        text: '基础设置',
                        collapsed: true,
                        items: [
                            {
                                text: '公司信息',
                                collapsed: true,
                                items: [
                                    {text: '人员信息', link: '/基础设置/公司信息/人员信息.md'},
                                    {text: '印章授权', link: '/基础设置/公司信息/印章授权.md'},
                                    {text: '基本资料', link: '/基础设置/公司信息/基本资料.md'},
                                    {text: '菜单设置', link: '/基础设置/公司信息/菜单设置.md'},
                                    {text: '部门岗位', link: '/基础设置/公司信息/部门岗位.md'},
                                ],
                            }, {
                                text: '官网',
                                collapsed: true,
                                items: [
                                    {text: '产品展示', link: '/基础设置/官网/产品展示.md'},
                                    {text: '基本信息', link: '/基础设置/官网/基本信息.md'},
                                ],
                            },
                            {
                                text: 'App设置',
                                link: '/基础设置/App设置.md',
                            },
                            {
                                text: '流程权限管理',
                                link: '/基础设置/流程权限管理.md',
                            }
                        ]
                    },
                    {
                        text: '品质管理',
                        collapsed: true,
                        items: [
                            {text: '出厂检验', link: '/品质管理/出厂检验.md'},
                            {text: '设备分类', link: '/品质管理/设备分类.md'},
                            {text: '品质制度', link: '/品质管理/品质制度.md'},
                            {text: '质检设备', link: '/品质管理/质检设备.md'},
                            {text: '报销申请', link: '/品质管理/报销申请.md'},
                            {text: '入场检验', link: '/品质管理/入场检验.md'},
                        ],
                    }, {
                        text: '技术管理',
                        collapsed: true,
                        items: [
                            {
                                text: '调度任务',
                                collapsed: true,
                                items: [
                                    {text: '产品维度', link: '/技术管理/调度任务/产品维度.md'},
                                    {text: '批次维度', link: '/技术管理/调度任务/批次维度.md'},
                                ],
                            },
                            {text: '产品列表', link: '/技术管理/产品列表.md'},
                            {text: '工序列表', link: '/技术管理/工序列表.md'},
                            {text: '调度记录', link: '/技术管理/调度记录.md'},
                            {text: '销售订单', link: '/技术管理/销售订单.md'},
                            {text: '零件列表', link: '/技术管理/零件列表.md'},
                            {text: '检验项目', link: '/技术管理/检验项目.md'},
                            {text: '技术制度', link: '/技术管理/技术制度.md'},
                            {text: '工装-设备分类', link: '/技术管理/工装-设备分类.md'},
                            {text: '技术改进', link: '/技术管理/技术改进.md'},
                            {text: '单位配置', link: '/技术管理/单位配置.md'},
                            {text: '报销申请', link: '/技术管理/报销申请.md'},
                        ],
                    }, {
                        text: '销售管理',
                        collapsed: true,
                        items: [
                            {text: '询价列表', link: '/销售管理/询价列表.md'},
                            {text: '模板列表', link: '/销售管理/模板列表.md'},
                            {text: '报价列表', link: '/销售管理/报价列表.md'},
                            {text: '合同列表', link: '/销售管理/合同列表.md'},
                            {text: '客户列表', link: '/销售管理/客户列表.md'},
                            {text: '备案记录', link: '/销售管理/备案记录.md'},
                            {text: '报销申请', link: '/销售管理/报销申请.md'},
                            {text: '销售制度', link: '/销售管理/销售制度.md'},
                        ],
                    }, {
                        text: '综合管理',
                        collapsed: true,
                        items: [
                            {text: '报销申请', link: '/综合管理/报销申请.md'},
                        ],
                    }, {
                        text: '采购管理',
                        collapsed: true,
                        items: [
                            {text: '询价列表', link: '/采购管理/询价列表.md'},
                            {text: '模板列表', link: '/采购管理/模板列表.md'},
                            {text: '报价列表', link: '/采购管理/报价列表.md'},
                            {text: '合同列表', link: '/采购管理/合同列表.md'},
                            {text: '采购制度', link: '/采购管理/采购制度.md'},
                            {text: '缺料列表', link: '/采购管理/缺料列表.md'},
                            {text: '供应商', link: '/采购管理/供应商.md'},
                            {text: '报销申请', link: '/采购管理/报销申请.md'},
                        ],
                    }, {
                        text: '财务管理',
                        collapsed: true,
                        items: [
                            {text: '合同列表', link: '/财务管理/合同列表.md'},
                            {text: '汇率税率', link: '/财务管理/汇率税率.md'},
                            {text: '产品等级', link: '/财务管理/产品等级.md'},
                            {text: '财务制度', link: '/财务管理/财务制度.md'},
                            {text: '客户系数', link: '/财务管理/客户系数.md'},
                            {text: '报销申请', link: '/财务管理/报销申请.md'},
                        ],
                    },
                ],
            },
            // {
            //     text: '基础设置示例',
            //     items: [
            //         {text: '官网设置', link: '/基础设置/流程权限管理.md'},
            //     ],
            // },
        ],
    },
    // locales: {
    //     root: {
    //         label: '简体中文',
    //         lang: 'zh',
    //     },
    // },
    vite: {
        plugins: [
            {
                name: 'PMS帮助文档',
                transform(code, id) {
                    if (id.includes('.vitepress/dist/client/app/data.js')) {
                        return code.replace(
                            'const dataSymbol = Symbol();',
                            'const dataSymbol = "__vitepress_data__";'
                        )
                    }
                }
            },
        ]
    },
});
