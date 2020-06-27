const assert = require("assert");

const YEC = require("./index.js");

// Should correctly translate yatoshi => YEC and vice versa

assert.equal(YEC.yatToYec(10000), .0001)
assert.equal(YEC.yecToYat(.0001), 10000)

// Should return positive numerical price values

YEC.price().then(r => {
    assert.equal(typeof r, "number")
    assert.ok(r > 0)
    console.log(r, "BTC")
    YEC.price("usd").then(r => {
        assert.equal(typeof r, "number")
        assert.ok(r > 0)
        console.log(r, "USD")
        YEC.price("GBP").then(r => {
            assert.equal(typeof r, "number")
            assert.ok(r > 0)
            console.log(r, "GBP")
        })
    })
})