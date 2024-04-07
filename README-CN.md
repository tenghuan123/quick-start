# quick-start

这是一个基于了目前较为流行的框架和库实现monorepo项目，无需过多的配置，你便可以开始你的项目，开箱即用

## 为什么会有这个库？

源于我自己在尝试开始一个全新的项目时，我需要做太多和我项目无关的但是必要的事情

1. 我需要考虑我的css方案是css-in-js还是原子化css方案（比如[tailwind](https://tailwindcss.com/docs/installation)）
2. 如果我需要使用[tailwind](https://tailwindcss.com/docs/installation)，我的定制化会比较强，我更喜欢自己的[tailwind](https://tailwindcss.com/docs/installation)组件库，那样我就能想干啥就干啥了，所以，我又要寻找类似于headless的组件库
3. 我不是专业的UI组件设计者，但是能有一个好看的主题就好了，这个时候我发现了非常棒的库，它就是[shacdn-ui](https://ui.shadcn.com/)
4. 好了，库我也解决了，我终于要弄项目架构了，开始用[turbrepo](https://turborepo.org/)搞一个monorepo模版
5. 开始改eslint配置、改tsconfig配置，各种配置….
6. 开始复制粘贴[shacdn-ui](https://ui.shadcn.com/)的组件，我喜欢它，但这真是太累了，兄弟
7. 开始介入[storybook](https://storybook.js.org/)，测试每一个组件，保证它们运行正常
8. OK，我们终于要开始我们的项目了！

好吧，直到最后一步我们才开始考虑我们的业务代码，紧接着我们还会有鉴权、验证、路由等等等需要考虑去设计，嘿，你发现了吗？时至今日，你要开始一个项目真的是太难了，我只是自己控制这些东西，结果，我可能会被前期的准备工作弄好几天。

所以，我希望大家能够直接开始有创造的阶段，一些可以预设的东西我都添加到这个项目中了，让大家直接进入创意时间。

## 展望未来？

在开始这个话题之前，我还是需要先感谢[shacdn-ui](https://ui.shadcn.com/)的作者[shacdn](https://github.com/shadcn)，以及它的维护者，它基于了我很多启发，它是一个很棒的库，直到被更多人看到。

通过脚手架能够自动将代码植入到项目中，这真的很帅，因此我想着，能不能将这种想法也带到后端，举个例子，我可以通过脚手架命令将一个鉴权的服务和设计移植到项目中，并且它能够正常运行，还兼并了较为高的灵活性，方便开发人员随时对它进行调整。

因此，这个模版只是第一步，未来我会将更多后端服务引入到项目中，让这个项目的功能变得更为强大。

## RoadMap

- [ ]  脚手架工具
- [ ]  changelog
- [ ]  前后端分离的架构
- [ ]  后端swagger文档的自动生成
- [ ]  zodios实现e2e类型安全
- [ ]  remix项目的搭建
- [ ]  数据获取的范式
- [ ]  双向校验的form
- [ ]  路由方案
- [ ]  Authentication
- [ ]  Authorization
- [ ]  部署方案

## 语言

[英语](https://github.com/tenghuan123/quick-start/blob/main/README.md)｜[中文](https://github.com/tenghuan123/quick-start/blob/main/README-CN.md)