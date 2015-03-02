describe('matching any kind of object', function () {
	
	var objectArray;

	beforeEach(function () {
		objectArray = [];
	});

	it('should be available', function () {
        var objectExists = !!matching;
        expect(objectExists).toBe(true);
    });
});