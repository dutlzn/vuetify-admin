



# Vue + Vuetify  Admin Template

###  Ref Url

https://materialdesignicons.com/



https://v15.vuetifyjs.com/zh-Hans



https://vuetifyjs.com/zh-Hans/components/navigation-drawers/#-7、





# login register



![](./images/1.png)

![](./images/2.png)

# note

原色： 背景：白 ， 文字： 黑
		1 dark --->全部反色 ( 背景色 + 文字颜色)
		2 class="primary" 只改变背景颜色
		1 和 2 都是相比较原来的颜色来说的
		
			app起到一个固定导航栏的作用



p class="red" 背景色

white--text 文字颜色

```html
<p class="pink red--text">
```



看不清文字

改成

class="pink lighten-4 red--text"

lighten 减轻背景颜色，加深文字颜色，数字越大，效果越明显

文字变暗 更突出

```html
<h1 class="display-4">Massive Display</h1>
```

字体最大



flat已经被移除了，现在用text来代替，看最新的文档





新版本的vuetify有一个问题

v-list-item to 加了路由就没有激活样式了





