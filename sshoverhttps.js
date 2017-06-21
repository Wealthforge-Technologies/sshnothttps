#!/usr/bin/env node
var inputString = '';
var qualify = false;
if(process.argv.length > 1 && process.argv[process.argv.length - 1] === '-h'){
    qualify = true;
}
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
    inputString += chunk;
});
process.stdin.on('end', function() {
    callback(inputString)
});
callback = (data) => {
    var midParse = data.replace(/(\r\n|\n|\r)/gm,"").split(/:|\//);
    if(qualify){
        process.stdout.write('https://github.com/'+midParse[midParse.length-2]+'/'+midParse[midParse.length-1]);
    }
    else{
        process.stdout.write('git@github.com:'+midParse[midParse.length-2]+'/'+midParse[midParse.length-1]);
    }

};
