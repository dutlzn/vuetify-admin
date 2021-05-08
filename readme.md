npm config set prefix "D:\nodejs\node_global"

 

npm config set cache "D:\nodejs\node_cache"

 

npm config set registry=http://registry.npm.taobao.org 

npm install -g cnpm --registry=https://registry.npm.taobao.org



选择Path，然后点击右下角的编辑，然后选择npm那个。点击右边的编辑，将其修改为：D:\Program Files\nodejs\node_global\

环境变量里如果有C盘里的npm 更换成D:\Program Files\nodejs\node_global\



安装 vue

cnpm install -g @vue/cli 



npm install -g yarn

yarn config set registry https://registry.npm.taobao.org





cnpm install 

cnpm run serve





vue-cli vue create project 推荐用yarn

更快

c 用户 .vuerc

{
  "useTaobaoRegistry": true,
  "latestVersion": "4.5.13",
  "lastChecked": 1620441465462,
  "packageManager": "npm" yarn
}



推荐用yarn

 vue add electron-builder

```bash
yarn add material-design-icons-iconfont -D
yarn add @fortawesome/fontawesome-free -D
```



```
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
```



打包

https://www.jianshu.com/p/1dbb96bc8f37

