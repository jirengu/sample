seajs.config({
  base: "./src/js",  
  alias: {
    "jquery": "lib/jquery.min"
  }
});

// 加载入口模块
seajs.use("app/index");