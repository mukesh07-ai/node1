//Read method
//a = require('node:fs')
//b = a.readFileSync('./a.txt', 'utf-8')
//console.log(b)

// //a.readFile('./a.txt', 'utf-8', (error, data) =>{
//     if(error){console.log(error)}
//     else{console.log(data)}
// //})
// console.log('hellow')
// console.log('patna')

// console.log('how are you')

//Write methord
// a = require('node:fs')
// a.writeFileSync('./m.txt', ' I am Mukesh')

//Append merhord
fs = require('node:fs')
fs.writeFile('./k.txt', 'hellow welcome to NSTI Patna.', {flag: "a"}, (error) =>{
        if(error){console.log(error)}
        else{console.log('print')}
    })

