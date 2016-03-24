# gulp的快捷使用

## 1. 安装gulp

	npm install -g gulp

如果报```Error: EACCES, open '/Users/xxx/xxx.lock```错误。先执行：```sudo chown -R $(whoami) $HOME/.npm```;

如果使用npm安装插件太慢（被墙），可执行 ```npm install -g cnpm --registry=https://registry.npm.taobao.org```,先安装cnpm, 之后再安装插件时用cnpm安装``` cnpm install gulp ```

## 2. 手动安装各种插件
	npm install --save gulp            //本地使用gulp
	npm install --save gulp-imagemin   //压缩图片
	npm install --save gulp-minify-css //压缩css
	npm install --save gulp-ruby-sass  //sass
	npm install --save gulp-jshint     //js代码检测
	npm install --save gulp-uglify     //js压缩
	npm install --save gulp-concat     //文件合并
	npm install --save gulp-rename     //文件重命名
	npm install --save png-sprite      //png合并
	npm install --save gulp-htmlmin    //压缩html
	npm install --save gulp-clean      //清空文件夹
	npm install --save browser-sync    //文件修改浏览器自动刷新
	npm install --save gulp-shell      //执行shell命令
	npm install --save gulp-ssh        //操作远程机器
	npm install --save run-sequence    //task顺序执行

或者根据package.json 自动安装。把package.json拷贝到自己的工程目录下，进入目录，执行:```npm install```


## 3. 范例 
#### 范例1:

demo1目录结构如下。把demo1中的 index.html压缩，把src里面的less编译、合并、压缩、重命名、存储到dist。src里面的图片压缩、合并存储到dist。src里面的js做代码检查，压缩，合并，存储到dist。

	+ demo1
		+ dist
			+ css
				- merge.min.css
			+ js
				- merge.min.js
			+ imgs
				- 1.png
				- 2.png
			- index.html
		+ src
			+ css
				- a.css
				- b.css
			+ js
				- a.js
				- b.js
			+ imgs
				- 1.png
				- 2.png
			- index.html



#### 范例2:
监控项目文件变动，自动刷新浏览器，本地调试

#### 范例3:
监控项目文件变动，自动压缩、合并、打包，上传到服务器

#### 范例4:
其他操作，如：本地命令执行，远程机器命令执行，git操作，task顺序执行



