const { mean, median, mode } = require("./math.js");

describe("Math tests", function(){
    beforeEach(function(){
        data1 = ['1','2','3'];
        data2 = ['1','2','3','4'];
        data3 = ['1','2','3','foo'];
        data4 = [];
        data5 = ['1','2','2','3'];
    })

    test("mean function", function(){
        expect(mean(data1)).toBe(2)
        expect(mean(data2)).toBe(2.5)
        expect(mean(data3)).toBe("foo is not a number")
        expect(mean(data4)).toBe("No numbers provided")
        expect(mode(data5)).toBe(2)

    })

    test("median function", function(){
        expect(median(data1)).toBe(2)
        expect(median(data2)).toBe(2.5)
        expect(median(data3)).toBe("foo is not a number")
        expect(median(data4)).toBe("No numbers provided")
        expect(mode(data5)).toBe(2)
        
    })

    test("mode function", function(){
        expect(mode(data1)).toBe("No Mode")
        expect(mode(data2)).toBe("No Mode")
        expect(mode(data3)).toBe("foo is not a number")
        expect(mode(data4)).toBe("No numbers provided")
        expect(mode(data5)).toBe(2)
    })


})
