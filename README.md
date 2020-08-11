# d-axios


## Installation

```
npm install d-axios
# or 
yarn add d-axios
```

## Getting started

1. 在main.js引入

   ```
   import {dAxios} from 'd-axios'
   Vue.use(dAxios)
   ```

2. 在src文件夹下创建api文件夹下并且创建index.js和服务serceApi.js文件

3. 在index.js文件里引入d-axios

   ```
   import { api } from 'd-axios'
   import serveApi from 'serveApi.js'
   // 第二个参数: 是否是多个服务,true 是, false 否    默认是false
   // 如果是多个微服务 ,第一个参数的名称需要使用微服务名称
   api.registry({serveApi},false)  生成接口
   ```

4. serveApi写入接口

   ```
   export default {
     //获取分页数据
     getPage: {
       'url': '/log/info/{id}', //接口url
       'mock': false,  //是否使用mock 数据
       'methods': 'post', //接口请求方式 默认get
       'showMsg': false //请求成功是否弹出提醒
     },
     // 批量保存
     logSaveBatchLogs: {
       'url': '/log/saveBatchLogs',
       'mock': false,
       'methods': 'post'
     },
   }
   ```

5. 如果后端使用swagger.接口写入可以使用我二次开发的easy-mock,导入swagger文档.可以快速生成接口服务
  ![](http://dreamwq.com/pic/easyMock/01.png)
  ![](http://dreamwq.com/pic/easyMock/02.png)
   easy-mock下载地址 https://git.lug.ustc.edu.cn/xdlumia/easy-mock.git