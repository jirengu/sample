/**
 * 
 * @authors hunger (hunger@jirengu.com)
 * @date    2015-12-23 20:10:58
 * @version $Id$
 */


define(function(){

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
        };

    })();
    return inc;
});

 

