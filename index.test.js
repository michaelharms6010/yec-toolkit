const YEC = require("./index.js");

console.log(YEC.yatToYec(10000))
console.log(YEC.yatToYec(.0001))

YEC.price().then(r => {
    console.log(r)
    YEC.price("btc").then(r => {
        console.log(r)
        YEC.price("GBP").then(r => {
            console.log(r)
        })
    })
})