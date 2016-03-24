/**
 * Created by wingo on 15/12/15.
 */

var assert = require('chai').assert,
    easyTpl = require('../lib/easyTpl');


var units = [
    [
        {
            name: 'ruoyu',
            addr: 'Hunger Valley'
        },
        'I\'m {{name}}. I live in {{addr}}.',
        'I\'m ruoyu. I live in Hunger Valley.'
    ],
    [
        {
            name: 'ruoyu',
            dog: {
                color: 'yellow',
                age: 2
            }
        },
        'My name is {{name}}. I have a {{dog.age}} year old {{dog.color}} dog.',
        'My name is ruoyu. I have a 2 year old yellow dog.'
    ],
    [
        {
            name: 'ruoyu',
            dog: {
                color: 'yellow',
                age: 2,
                friend: {
                    name: 'hui'
                }
            }
        },
        'My name is {{name}}. I have a {{dog.age}} year old {{dog.color}} dog. His friend is {{dog.friend.name}}.',
        'My name is ruoyu. I have a 2 year old yellow dog. His friend is hui.'
    ]
]

describe('easyTpl', function () {
    it('should replace patten correctly', function () {
        units.forEach(function(testData, idx){
            assert.equal(easyTpl(testData[1], testData[0]), testData[2],  'test ' + idx + ' failed');
        });

    });
});
