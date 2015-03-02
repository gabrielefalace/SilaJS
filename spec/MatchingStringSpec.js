
describe('matching object', function () {

    var stringArray;

    beforeEach(function () {
        stringArray = ['Australia', 'America', 'Brazil', 'California', 'Fiji', 'Mauritius', 'Seychelles', 'Mexico', 'Zanzibar'];
    });

    it('should be available', function () {
        var objectExists = !!matching;
        expect(objectExists).toBe(true);
    });

    it('should starts with', function () {
        var expected = ['Australia', 'America'];
        var actual = stringArray.filter((matching.startsWith)('A'));

        expect(actual.length).toBe(actual.length);

        for (var i = 0; i < actual.length; i++) {
            expect(actual[i]).toBe(expected[i]);
        };
    });


    it('should ... ', function () {

    });

});
