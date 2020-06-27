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

exports.getBurnAddress = _ => {
    dictionary = "ACDEFGHJKLMNPQRUVWXYZacdefghjklmnpqruvwxyz023456789"
    let tail = ""
    for (let i = 0; i < 23; i++) {
        tail += dictionary[Math.floor(Math.random() * dictionary.length)]
    }
    const head = "s1"
    const middle = "newfurnace"
    saddr = (head + middle + tail)
    return saddr

}