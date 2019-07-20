var os = require('os');
var colors = require('colors');
var calcTime = require('./calcTime');

process.stdin.setEncoding('utf-8');

function getOSinfo() {
    var type = os.type();

    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }

    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();
    
    

    var test = calcTime.print();
    
    
    console.log('System: '.grey, type);
    console.log('Release: '.red, release);
    console.log('CPU model: '.magenta, cpu);
    console.log('Uptime: ~'.green, test);
    console.log('User name: '.yellow, userInfo.username);
    console.log('Home dir: '.cyan, userInfo.homedir);
}

exports.print = getOSinfo;