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

exports.price = async function(currency = "usd") {
    try {
        res = await axios.get("https://api.coingecko.com/api/v3/coins/ycash")
        price = +res.data.market_data.current_price[currency.toLowerCase()]
        return /^btc$/i.test(currency) ? price : +price.toFixed(2)
        // Should this round fiat currencies? Seems like it should be an option somewhere, use cases for round / not rounded 
    } catch {
        console.log("Error accessing price info")
    }
    
}