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

    var easyTpl = (function () {
        "use strict";

        var re = /{{([^{}]+)?}}/g,
            match,
            path,
            raw,
            token,
            lookup;

        return function (tpl, data) {
            while (match = re.exec(tpl)) {
                token = match[1];
                raw = match[0];
                path = token.split(".");
                lookup = data;

                for (var i = 0; i < path.length; i++) {
                    lookup = lookup[path[i]];
                    if (lookup === void 0) {
                        throw "template error: '" + path[i] + "' not found in " + raw;
                    }
                }
                tpl = tpl.replace(raw, lookup);
            }
            return tpl;
        };
    }());
    return easyTpl;

}, this);

