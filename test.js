test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const expected = 4 * 1.2; 
    expect(fromEuroToDollar(4)).toBe(expected); 
})

test("One dollar should be 127.9 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    const expected = (5 / 1.2) * 127.9; 
    expect(fromDollarToYen(5)).toBe(expected); 
})

test("One yen should be 0.8 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    const expected = (6 / 127.9) * 0.8; 
    expect(fromYenToPound(6)).toBe(expected); 
})