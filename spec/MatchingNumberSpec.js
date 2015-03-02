describe('matching number object', function () {

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


    it('should select only odd elements', function () {
        var expected = [3, 7, 13];
        var actual = numberArray.filter(matching.odd);

        expect(actual.length).toBe(expected.length);

        for (var i = 0; i < actual.length; i++) {
            expect(actual[i]).toBe(expected[i]);
        }
    });

    it('should select only elements between', function () {
        var expected = [7, 8, 13, 18];
        var actual = numberArray.filter((matching.between)(7, 18));

        expect(actual.length).toBe(expected.length);

        for (var i = 0; i < actual.length; i++) {
            expect(actual[i]).toBe(expected[i]);
        }
    });

    it('should select only elements strictly between', function () {
        var expected = [8, 13];
        var actual = numberArray.filter((matching.strictlyBetween)(7, 18));

        expect(actual.length).toBe(expected.length);

        for (var i = 0; i < actual.length; i++) {
            expect(actual[i]).toBe(expected[i]);
        }
    });

    it('should select only elements greater than', function () {
        var expected = [8, 13, 18, 24, 56];
        var actual = numberArray.filter((matching.greaterThan)(7));

        expect(actual.length).toBe(expected.length);

        for (var i = 0; i < actual.length; i++) {
            expect(actual[i]).toBe(expected[i]);
        }
    });

    it('should select only elements greater and equals to', function () {
        var expected = [7, 8, 13, 18, 24, 56];
        var actual = numberArray.filter((matching.greaterEqualsTo)(7));

        expect(actual.length).toBe(expected.length);

        for (var i = 0; i < actual.length; i++) {
            expect(actual[i]).toBe(expected[i]);
        }
    });

     it('should select only elements smaller than', function () {
        var expected = [3, 4, 7, 8, 13];
        var actual = numberArray.filter((matching.smallerThan)(18));

        expect(actual.length).toBe(expected.length);

        for (var i = 0; i < actual.length; i++) {
            expect(actual[i]).toBe(expected[i]);
        }
    });

    it('should select only elements smaller and equals to', function () {
        var expected = [3, 4, 7, 8, 13, 18];
        var actual = numberArray.filter((matching.smallerEqualsTo)(18));

        expect(actual.length).toBe(expected.length);

        for (var i = 0; i < actual.length; i++) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});