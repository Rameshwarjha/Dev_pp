


const fs = require("fs");

let f1kapromise = fs.promises.readFile("./f1.txt");
f1kapromise.then(function(data){
    console.log(data + "");
    let f2kapromise = fs.promises.readFile("./f4.txt");
    return f2kapromise;

})
.then(function(data){
    console.log(data+"");

    let f3kapromise = fs.promises.readFile("./f3.txt");
    return f3kapromise;

})
.then(function(data){
    console.log(data+"");
})