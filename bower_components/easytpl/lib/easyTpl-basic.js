/**
 * Created by ruoyu on 15/12/14.
 */


function easyTpl(tpl, data){
    var re = /{{([^{}]+)?}}/g,
        match, path, raw, token, lookup;

    while(match = re.exec(tpl)){
        token = match[1];
        raw = match[0];
        path = token.split(".");
        lookup = data;

        for (var i = 0 ; i < path.length; i++){
            lookup = lookup[path[i]];
            if (lookup === void 0){
                throw "template error: '" + path[i] + "' not found in " + raw;
            }
        }
        tpl = tpl.replace(raw, lookup);
    }
    return tpl;
}
