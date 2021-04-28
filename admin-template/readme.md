# 后台管理系统

# 目标

制作登陆页面、后台界面



# 步骤

## 创建项目

```
vue create fe
```

手动选择特性 选择router

启动项目

```
npm run serve
```

## 添加vuetify

[官方文档](https://vuetifyjs.com/zh-Hans/getting-started/installation/)



## 添加图标字体

```
cnpm install material-design-icons-iconfont -D
cnpm install @fortawesome/fontawesome-free -D
```

用cnpm 会快一点 

本项目开发工具：Hbuilder X

```js
import '@fortawesome/fontawesome-free/css/all.css' // 确保您正在使用 css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css' // 确保您正在使用 css
```

如果提示有空格啦、或者其他规范问题，直接重排代码即可

## 登陆页面

先删除所有自带的view

登陆页面布局采用card形式 居中 

表单信息：姓名 + 密码 

vuetify这块图形验证码貌似没有合适的组件，需要自己手动调css

[文字排版](https://vuetifyjs.com/zh-Hans/styles/text-and-typography/)

技巧：可以通过v-spacer来控制元素的排布局

[d-flex 布局](https://vuetifyjs.com/zh-Hans/styles/flex/)

[fill-height](https://vuetifyjs.com/zh-Hans/getting-started/frequently-asked-questions/#section-95ee98984e13533a)

- **如何垂直居中内容？**

  将 **fill-height** prop 应用于 `v-container`。 这个辅助类通过只增加 **height: 100%**, 但是对于容器, 它还查找子 `v-layout` 并添加应用所需的类将内容垂直居中。



## 后台界面侧边栏+顶部栏



[顶部栏](https://vuetifyjs.com/zh-Hans/components/app-bars/)

[侧边栏](https://vuetifyjs.com/zh-Hans/components/navigation-drawers/)



## 完善



## 集成axios

```
cnpm i axios --save
```

创建global.js

这里要注意：

一个文件里可以有多个export const 

但是export  default 只能有一个

export const baseUrl 对应的导入方式: import {baseUrl}  from ....

export default {} 对应的导入方式 import global from ... 



开始配置axios 挺麻烦，但是为了以后前后端分离开发的方便，我们应该注意工程结构



完成，后续可以增加第三方加载框js、css

写一些js库