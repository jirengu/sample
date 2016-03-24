define(function (require) {
	var com1 = require('com/com1');
	console.log(com1 + '   111');
    return {
        getHello: function () {
            return 'Hello World';
        }
    };
});
