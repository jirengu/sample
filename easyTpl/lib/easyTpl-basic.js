/**
 * Created by ruoyu on 15/12/14.
 */
/**
 * 通过传递模版字符串和json格式数据，获取替换后的字符串
 * @param  {String} tpl  模版字符串;
 * @param  {JSON} data 传递的json格式对象
 * @return {String}      返回模版变量替换后的字符串
 * @eg:
 * var str = 'hello {{name}}, My friend is {{friend.name}}';
 * var data = {name: 'hunger', friend: {name: 'valley'}};
 * easyTpl(str, data); 
 * //返回字符串： hello hunger, My friend is valley
 */
function easyTpl(tpl, data){
    var re = /{{([a-zA-Z$_][a-zA-Z$_0-9\.]*)}}/g;
    return tpl.replace(re, function(raw, key, offset, string){
      var paths = key.split('.'),
          lookup = data;
      while(paths.length>0){
        lookup = lookup[paths.shift()];
      }
      return lookup||raw;
    }); 
}

