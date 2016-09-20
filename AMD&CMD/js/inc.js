/**
 * 
 * @authors hunger (hunger@jirengu.com)
 * @date    2015-12-23 20:10:58
 * @version $Id$
 */



(function (name, definition, context) {
    if (typeof module != 'undefined' && module.exports) {
        // 在 CMD 规范下 (node)
        module.exports = definition();
    } else if (typeof context['define'] == 'function' && (context['define']['amd'] || context['define']['cmd'])  ) {
        //在 AMD 规范下(RequireJS) 或者 CMD 规范下(SeaJS)
        define(definition);
    } else {
        //在浏览器环境下
        context[name] = definition();
    }
})('Inc', function () {

    var inc = (function () {
        var a = 1;

        function inc(){
        	a++;
        }

        function get(){
        	return a;
        }

        return {
        	inc: inc,
        	get: get
        }

    })();

    return inc;

}, this);