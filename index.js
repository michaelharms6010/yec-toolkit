const yaddrRegex = /^ys[a-z0-9]{76}$/;
const saddrRegex = /^s1[AC-HJ-NP-Zac-hj-np-z02-9]{33}$/;
const axios = require("axios")


exports.isValidYaddr = function(yaddr) {
    return yaddrRegex.test(yaddr)
}

exports.isValidSaddr = function(saddr) {
    return saddrRegex.test(saddr)
}

exports.isValidAddress = function(address) {
    return saddrRegex.test(address) || yaddrRegex.test(address)
}

exports.isValidAddress = function(address) {
    return taddrRegex.test(address) || zaddrRegex.test(address)
}

exports.yatToYec = function(i) {
    return +(i / 100000000).toFixed(8)
}

exports.yecToYat = function(f) {
    return f * 100000000
}

exports.price = async function(currency = "btc") {
    try {
        res = await axios.get("https://api.coingecko.com/api/v3/coins/ycash")
        return +res.data.market_data.current_price[currency.toLowerCase()]
        
    } catch {
        console.log("Error accessing price info")
    }
    
}

exports.getBurner = _ => {
    dictionary = []
    for (let i = 65; i < 108; i++) {
        dictionary.push(String.fromCharCode(i))
    }
    const head = "s1"
    middle = "burnaddress"
    // tail = [*("A"),*('C'..'H'),*("J".."N"),*("P".."Z"), *("a"),*('c'..'h'),*("j".."n"),*("p".."z"),*('0'),*("2".."9")].shuffle[0,9].join
    
    taddr = (head + middle + tail)


}