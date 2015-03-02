describe('matching object', function () {

    var numberArray;

    beforeEach(function () {
        numberArray = [3, 4, 7, 8, 13, 18, 24, 56];
    });

    it('should be available', function () {
        var objectExists = !!matching;
        expect(objectExists).toBe(true);
    });

    it('should select only even elements', function () {
        var expected = [4, 8, 18, 24, 56];
        var actual = numberArray.filter(matching.even);

        expect(actual.length).toBe(expected.length);

        for (var i = 0; i < actual.length; i++) {
            expect(actual[i]).toBe(expected[i]);
        }
    });


    it('should select only even elements', function () {
        var expected = [3, 7, 13];
        var actual = numberArray.filter(matching.odd);

        expect(actual.length).toBe(expected.length);

        for (var i = 0; i < actual.length; i++) {
            expect(actual[i]).toBe(expected[i]);
        }
    });

});