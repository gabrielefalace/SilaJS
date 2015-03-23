describe('matching text object', function () {

    
    var blankString = '';
    
    var zero = 0;
    
    var emptyObject = {};
    
    var notNumber = 10/'H';
    
    var emptyArray = [];

    
    it('should give true for the blank string', function () {
        var outcome = value(blankString).isBlank();
        expect(outcome).toBeTruthy();
    });
    
    it('should give false for the empty object', function () {
        var outcome = value(emptyObject).isBlank();
        expect(outcome).toBeFalsy();
    });
    
    it('should give false for zero', function () {
        var outcome = value(zero).isBlank();
        expect(outcome).toBeFalsy();
    });
    
    it('should give true for NaN', function () {
        var outcome = value(notNumber).isBlank();
        expect(outcome).toBeTruthy();
    });
    
    it('should give false for empty Array', function () {
        var outcome = value(emptyArray).isBlank();
        expect(outcome).toBeFalsy();
    });

});
