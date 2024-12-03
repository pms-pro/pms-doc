
## [PMS-DOC用户帮助文档](http://doc.zhgcraft-pms.com/pms-doc/)

---
<font face="微软雅黑" size=2 color=#A9A9A9 >版权声明：内容供技术友人学习使用，请勿外传！转载请附上作者信息</font>

![coverage](https://img.shields.io/badge/%E5%8D%97%E4%BA%AC-%E4%B8%AD%E9%80%A0%E8%BD%AF%E4%BB%B6-0ba0a0)
[![coverage](https://img.shields.io/badge/PMS-%E8%BF%90%E8%90%A5%E7%B3%BB%E7%BB%9F-3e73ff)](http://www.zhgcraft.com/)
[![coverage](https://img.shields.io/badge/PMS-%E5%95%86%E6%88%B7%E7%B3%BB%E7%BB%9F-8A2BE2)](https://zhongzao.zhgcraft-pms.com/login/)

#### 商户系统帮助指南，PMS开箱即用的数据建模、逻辑编排、表单设计、页面设计、流程设计、报表设计、官网设计、移动设计、数据集成等系统通用基础功能，开发平台配套的移动App，自动生成移动App功能及界面代码，实现同一套代码同时发布到苹果端、安卓端，实现企业信息化统一管理。平台主要目的让开发者注重专注业务，降低技术难度，缩短项目开发交付周期，提高软件安全质量，节省人力成本，为企业数字化建设降本增效。

<div align="center">
  <b>感谢小伙伴【周志鹏 (小周)】编写文档输出 </b>
</div>

---

### 重要信息
1. [帮助文档访问地址](http://doc.zhgcraft-pms.com/pms-doc/)

---

### 基础命令

<details>

<summary>点此展开查看</summary>

### 1.进入目录

```shell
cd D:\InsertList\pms-help

D:
```

### 2.更新本地代码

```shell
git pull
```

### 3.添加本地文件

```shell
git add *
```

### 4.提交更新

```shell
git commit -m "补充了几个部门的界面，仓储、财务、采购、技术、基础设置、销售部门已完成"
```

### 4.代码推送仓库

```shell
# 如果发布到  GitHub
git push -u origin "master"
```

### 5.项目地址：https://gitee.com/qierkang/pms-help/tree/master

</details>

---

### 打包运行项目

<details>

<summary>点此展开查看</summary>

### 1.安装 pnpm（如果未安装）

```shell
npm install -g pnpm
```

### 2.安装依赖

```shell
pnpm install
```

### 3.项目构建

```shell
pnpm run docs:build
```

### 4.本地运行

```shell
pnpm run docs:dev
```

### 5.Docker 打包本地运行

```shell
# 打包
docker build -t pms-doc .
# 运行
docker run -d -u 0 --name pms-doc --restart=on-failure --detach \
  --restart=on-failure:3 \
  --network myNetwork --env DOCKER_HOST=tcp://docker:2376 \
  --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 \
  --publish 5173:5173 \
  --volume /etc/localtime:/etc/localtime \
  --volume $(which docker):/usr/bin/docker \
  pms-doc:latest pnpm run docs:dev
# 进入容器
docker exec -it pms-doc bash
```
### 域名映射
> 部署完成后在分支docs需要新增CNAME文件内容为：doc.zhgcraft-pms.com
> echo "doc.zhgcraft-pms.com" >> CNAME

### 4.代码推送仓库

```shell
# 如果发布到  GitHub
git push -f git@github.com:pms-pro/pms-doc.git master

```
</details>

----------------------------------

### 贡献者列表
特别感谢参与贡献的所有同学，欢迎大家继续踊跃贡献代码！

<details>
<summary>点击此处展开查看贡献次数最多的几位小伙伴</summary>

+ [尔康 (薯条开源)](https://github.com/qierkang)
+ 周志鹏 (小周)


</details>

### 提问和交流
- [GitHub提问](https://github.com/pms-pro/pms-doc/issues)