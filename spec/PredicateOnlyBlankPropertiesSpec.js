describe('checking object having only blank properties', function () {

    var obj = {a: '', b: ''};

    var funObj = {a: '   ', b: ''};
    
    var funObj2 = {a: '   ', b: function(){return true;}};
    
    var notBlank = {a: 'pollo', b: function(){return true;}};
    
    var empty = {};
    

    it('should recognize an object with only blank properties', function () {
        expect(value(obj).hasOnlyBlankProperties()).toBeTruthy();
    });

    it('should recognize an object with only blank properties and a function', function () {
        expect(value(funObj).hasOnlyBlankProperties()).toBeTruthy();
    });
    
    it('should recognize an object with only blank properties and a function', function () {
        expect(value(funObj2).hasOnlyBlankProperties()).toBeTruthy();
    });

    it('should recognize an object with only blank properties and a function', function () {
        expect(value(notBlank).hasOnlyBlankProperties()).toBeFalsy();
    });
    
    it('should return true for an empty object', function () {
        expect(value(empty).hasOnlyBlankProperties()).toBeTruthy();
    });
});
