---
title: Valaxy 主题 Hairy
categories: Valaxy Theme Hairy
date: 2022-08-03 15:00:00
tags:
  - valaxy
  - 教程
top: 10
---

<HairyImage class="rounded w-full h-150" fit="contain" src="https://user-images.githubusercontent.com/49724027/182444624-6228d153-94cb-461d-a5d8-be8535441fb6.png" />

最初，我使用 [Vuepress](https://www.vuepress.cn/) 搭建了一个博客，主要用于记录学习笔记，因此也没有特别在意域名和 RSS 等细节，为了方便直接采用了 gitee pages 进行部署。随着时间的推移，我开始希望拥有一个更加个性化的博客框架。尽管 [Vuepress](https://www.vuepress.cn/) 本身非常出色，但它在定制方面相对复杂，而且博客功能的集成度不高，许多功能需要自己动手实现。

之后我发现了 [Valaxy](https://valaxy.site/) 它的设计理念与我的需求十分相似符合，加上近期 gitee pages 频繁告警文章敏感内容，难以排查（主要原因? hhh）博客几乎处于瘫痪状态，所以选择了 [Valaxy](https://valaxy.site/) 定制化博客。

Valaxy 在官网中所描述，Valaxy = V + Galaxy 旨在成为下一代静态博客框架，提供更好的热更新与用户加载体验，它不像传统的文档系统，内置了更多博客相关的 API，为博客开发提供了更强大更便捷的自定义开发可能性。

<!-- more -->

<HairyImageGroup row="150px">
  <HairyImage src="https://user-images.githubusercontent.com/49724027/182445245-e4e0fcab-24fc-4cfa-9756-8cba44a4f6bb.png" />
  <HairyImage src="https://user-images.githubusercontent.com/49724027/182445323-5f7870e8-f21c-4bc5-ac87-a566e4b01c97.png" />
  <HairyImage src="https://user-images.githubusercontent.com/49724027/182445732-9678e9e9-3b6d-470b-b4c4-9b632b4984a0.png" />
  <HairyImage src="https://user-images.githubusercontent.com/49724027/182445776-148b6fed-c2db-4821-b57f-7fab053c87ca.png" />
  <HairyImage src="https://user-images.githubusercontent.com/49724027/182445825-2a036954-b604-4037-b21c-bdcb9b2182a2.png" />
  <HairyImage src="https://user-images.githubusercontent.com/49724027/182445873-19270c4c-bee6-4652-b7ac-7a5ebf2565a9.png" />
  <HairyImage src="https://user-images.githubusercontent.com/49724027/182446015-021eb02f-570d-4c3c-8801-c02343ced0b8.png" />
</HairyImageGroup>

## 使用指南

本博客为 Valaxy 主题，Valaxy 现如今仍在实验阶段，请谨慎使用，确保遇到问题时，您有能力解决和沟通协调。

那么在此，我视为您已了解 Valaxy 的使用与风险，本系列文章着重讲解主题的使用以及主题的特殊功能。

> 更多信息请参见 [Valaxy 官网](https://valaxy.site/)

有任何关于本主题的缺陷报告与功能建议，可以发起 [Issues](https://github.com/TuiMao233/valaxy-theme-hairy/issues)。

## 快速开始

创建 Valaxy 项目，更多细节您可以参考 [Valaxy#getting-started](https://valaxy.site/guide/getting-started)。

```sh
# 创建项目
pnpm create valaxy@0.10.3 # or npm init valaxy
# 运行项目
pnpm dev # or npm run dev
```
> valaxy-hairy-theme 目前仅支持 valaxy@0.10.3，在 valaxy@1.x 发布后进行兼容

## 应用主题

进入您的 Valaxy 博客根目录，执行：

```sh
pnpm i valaxy-theme-hairy
```

编辑您的 valaxy.config ，设置 theme 字段

```json
{
  "theme": "hairy"
}
```

## 修改站点配置

站点配置文件 `<root>/valaxy.config`，它支持 `json|yml|ts|js`。

```ts
// valaxy.config.ts
import { defineSite } from 'valaxy'
export default defineConfig({
  // 站点标题
  title: '...',
  // 作者信息
  author: {
    avatar: 'https://....png',
    name: 'your name'
  },
  // 站点描述
  description: '...',
  // 站点主题(hairy)
  theme: 'hairy',
  // or more...
})
```

> 您还可以参考 Valaxy 的详细文档 [valaxy#config](https://valaxy.site/guide/getting-started)

---
