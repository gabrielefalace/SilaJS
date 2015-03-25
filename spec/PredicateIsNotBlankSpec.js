describe('Checker for non blank variables', function () {

    
    var blankString = '';
    
    var blankString2 = '   ';
    
    var zero = 0;
    
    var emptyObject = {};
    
    var notNumber = 10/'H';
    
    var emptyArray = [];

    
    it('should give true for the blank string', function () {
        var outcome = value(blankString).isNotBlank();
        expect(outcome).toBeFalsy();
    });
    
    it('should give true for the longer blank string', function () {
        var outcome = value(blankString2).isNotBlank();
        expect(outcome).toBeFalsy();
    });
    
    
    it('should give false for the empty object', function () {
        var outcome = value(emptyObject).isNotBlank();
        expect(outcome).toBeTruthy();
    });
    
    it('should give false for zero', function () {
        var outcome = value(zero).isNotBlank();
        expect(outcome).toBeTruthy();
    });
    
    it('should give true for NaN', function () {
        var outcome = value(notNumber).isNotBlank();
        expect(outcome).toBeFalsy();
    });
    
    it('should give false for empty Array', function () {
        var outcome = value(emptyArray).isNotBlank();
        expect(outcome).toBeTruthy();
    });

});
