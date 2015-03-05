describe('matching any kind of object', function () {
	
	var objectArray;

	beforeEach(function () {
		objectArray = [
				{
					name: 'John',
					surname: 'Doe'
				},
				{
					name: 'James',
					surname: 'Bond'
				},
				{
					name: 'Frank',
					surname: 'Loe'
				},
				{
					name: 'Enrico',
					surname: 'Fermi'
				}];
	});

	it('should be available', function () {
        var objectExists = !!matching;
        expect(objectExists).toBe(true);
    });


	it('should select elements with name starting with "J"', function () {
		var actual = objectArray.filter(matching.fieldStartsWith('name', 'J'));
		expect(actual.length).toEqual(2);
		expect(actual[0].name).toEqual('John');
		expect(actual[1].name).toEqual('James');
	});

	it('should select elements with name containing  "a"', function () {
		var actual = objectArray.filter(matching.fieldContains('name', 'a'));
		expect(actual.length).toEqual(2);
		expect(actual[0].name).toEqual('James');
		expect(actual[1].name).toEqual('Frank');
	});

	it('should select elements with surname ending with "oe"', function () {
		var actual = objectArray.filter(matching.fieldEndsWith('surname', 'oe'));
		expect(actual.length).toEqual(2);
		expect(actual[0].surname).toEqual('Doe');
		expect(actual[1].surname).toEqual('Loe');
	});

	it('should select elements with name equals to "James"', function () {
		var actual = objectArray.filter(matching.fieldEquals('name', 'James'));
		expect(actual.length).toEqual(1);
		expect(actual[0].surname).toEqual('Bond');
		expect(actual[0].name).toEqual('James');
	});


	it('should select elements with name equals to "jaMEs"', function () {
		var actual = objectArray.filter(matching.fieldEqualsIgnoreCase('name', 'jaMEs'));
		expect(actual.length).toEqual(1);
		expect(actual[0].surname).toEqual('Bond');
		expect(actual[0].name).toEqual('James');
	});

});