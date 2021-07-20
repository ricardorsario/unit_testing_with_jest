let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    let resultInDollar = valueInEuro * oneEuroIs.USD;
    return resultInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let resultInYen = (valueInDollar / oneEuroIs.USD) * oneEuroIs.JPY;
    return resultInYen;
}

const fromYenToPound = function(valueInYen){
    let resultInPound = (valueInYen / oneEuroIs.JPY) * oneEuroIs.GBP;
    return resultInPound;
}

module.exports = { fromEuroToDollar, fromYenToPound, fromDollarToYen};