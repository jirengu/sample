// {
//     "appDir": "../www",
//     "mainConfigFile": "../www/app.js",
//     "dir": "../www-built",
//     "modules": [
//         {
//             "name": "app"
//         }
//     ]
// }
({
    baseUrl: "../www/lib",
    paths: {
        app: '../app',
        com: '../com'
    },
    name: "app/main",
    out: "../dist/merge.js"
})