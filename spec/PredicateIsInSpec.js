describe('matching text object', function () {

    var list;
    var present = 'Brazil';
    var notPresent = 'Calabria';

    beforeEach(function () {
        list = ['Australia', 'America', 'Brazil', 'California', 'Fiji', 'Mauritius', 'Seychelles', 'Mexico', 'Zanzibar'];
    });

    it('should find element in array', function () {
        var outcome = value(present).isIn(list);
        expect(outcome).toBeTruthy();
    });

    it('should find element in free values', function () {
        var outcome = value(present).isIn('South Africa', 'Canada', 'Brazil');
        expect(outcome).toBeTruthy();
    });

    it('should not find element in array', function () {
        var outcome = value(notPresent).isIn(list);
        expect(outcome).toBeFalsy();
    });

    it('should not find element in free values', function () {
        var outcome = value(notPresent).isIn('South Africa', 'Canada', 'Brazil');
        expect(outcome).toBeFalsy();
    });

});
