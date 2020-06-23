const yaddrRegex = /^ys[a-z0-9]{76}$/;
const saddrRegex = /^s1[AC-HJ-NP-Zac-hj-np-su-z02-9]{33}$/;


exports.isValidYaddr = function(yaddr) {
    return yaddrRegex.test(yaddr)
}

exports.isValidsaddr = function(saddr) {
    return saddrRegex.test(saddr)
}

exports.isValidAddress = function(address) {
    return saddrRegex.test(address) || yaddrRegex.test(address)
}

// the three above functions are untested

// TODO: sendmany generator
// Lite wallet CLI send generator
// Burner address generator
// Memo splitter
// Block info grabber
// Yatoshi to YEC
// YEC to Yatoshi