define( function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');

    var com1 = require('com/com1');
    console.log(com1);

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');
    


    print(messages.getHello());
});
