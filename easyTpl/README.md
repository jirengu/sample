# easyTpl

easyTpl, a simple JavaScript template.

## Install

1. Node environment

```bash    
npm install easytpl
```
2. Client environment

```bash
bower install easytpl
```
## Useage

```javascript

var easyTpl = require('easyTpl');
var tpl = 'hello my name is {{name}}. I have a {{dog.age}} year old dog. His color is {{dog.color}}.';

var data = {
    name: 'hunger',
    dog: {
        color: 'yellow',
        age: 2
    }
};

var str = easyTpl(tpl, data);
console.log(str);
```
more demos in **sample** folder.

online demo? visit [http://book.jirengu.com/jirengu/easytpl].

## Test

```bash
make test
```

## Auther

- [hunger@jirengu.com](http://hunger.coding.io)

