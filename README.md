# miniprogram-template
wechat mini program template with cloud function and cloud database

tree base-info/

base-info/			#项目根目录

├── cloudfunctions		#云函数目录

│   └── quickstartFunctions	

│       ├── config.json			#云函数配置文件

│       ├── index.js			#云函数入口函数

│       ├── package.json		#云函数打包配置

│       ├── selectRecord		

│       │   └── index.js			#云函数子函数

│       └── updateRecord

│           └── index.js			#云函数子函数

├── miniprogram		#小程序目录

│   ├── app.js				#小程序启动入口

│   ├── app.json			#小程序全局配置

│   ├── app.wxss			#小程序全局样式

│   ├── components		#自定义组件

│   ├── envList.js			#环境配置

│   ├── images			#图片资源

│   ├── pages				#页面目录

│   │   └── index

│   │       ├── index.js			#页面代码

│   │       ├── index.json			#页面配置

│   │       ├── index.wxml		#页面布局

│   │       └── index.wxss			#页面样式

│   └── sitemap.json		#微信搜索索引配置

├── project.config.json	#项目配置

├── project.private.config.json

├── README.md

└── uploadCloudFunction.bat

9 directories, 18 files


![小程序-1](https://user-images.githubusercontent.com/17016441/140248978-bc9ca4df-31e5-4291-bd6a-4e123c1bbdb9.png)
