/**
 * easyTpl.js a simple Javascript template engine
 * by ruoyu @jirengu
 */
(function (name, definition, context) {
    if (typeof module != 'undefined' && module.exports) {
        // in node env
        module.exports = definition();
    } else if (typeof context['define'] == 'function' && (context['define']['amd'] || context['define']['cmd'])  ) {
        //in requirejs seajs env
        define(definition);
    } else {
        //in client evn
        context[name] = definition();
    }
})('easyTpl', function () {
    return function (tpl, data){
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
}, this);

