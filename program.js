process.stdin.setEncoding('utf-8');

console.log('Version you are currently using is ' + process.versions.v8);
console.log('Language is set to ' + process.env.lang);
console.log('To exit write: /exit');

process.stdin.on('readable', function() {

    var input = process.stdin.read();

    if(input !== null) {
        var instruction = input.toString().trim();
    }

    switch (instruction) {
        case '/exit':
            process.stdout.write('Quitting app!\n');
            process.exit();
            break;

        default:
            process.stderr.write('Wrong instruction!\n');       
    }
});