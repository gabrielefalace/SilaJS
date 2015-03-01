/*
	The MIT License (MIT)

	Copyright (c) 2015 Gabriele Falace, Daniela Martino

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

function valueOf(element){
	return new Predicate(element);
}

function Predicate(element){
	var self = this;
	this.element = element;

	self.isIn = function(){
		for(var i=0; i<arguments.length; i++){
			if(self.element === arguments[i]){
				return true;
			}
		}
		return false;
	};

	self.isNotIn = function(){
		return !self.isIn(arguments);
	}
}

var matching = matching || {
			
	// equals for both String or Number
	
	equalsTo: function(param){ 
		return function(element){return element === param;};
	},

	// for numbers
	
	odd: function(element){ 
		return element % 2 === 1; 
	},

	even: function(element){ 
		return element % 2 === 0; 
	},
	
	between: function(param1, param2){ 
		return function(element){
			return element >= param1 && element <= param2;
		}; 
	},

	strictlyBetween: function(param1, param2){ 
		return function(element){
			return element > param1 && element < param2;
		};
	},
	
	greaterThan: function(param){
	    return function(element){ return element > param;};
	},
	
	greaterEqualsTo: function(param){
		return function(element){ return element >= param;};
	},
			
	smallerThan: function(param){
		return function(element){return element < param;};
	},
	
	smallerEqualsTo: function(param){
		return function(element){return element <= param;};
	},

	// for strings
	
	startsWith: function(prefix){
		return function(element){ return element.indexOf(prefix)===0; };
	},
	
	contains: function(substring){
		return function(element){ return element.indexOf(substring)>=0; };
	},
	
	endsWith: function(suffix){
		return function(element){ return element.indexOf(suffix) + suffix.length === element.length; };
	},
	
	// for objects
	
	fieldEquals: function(fieldName, fieldValue){
		return function(element){ 
			return element[fieldName] === fieldValue;
		};
	},

	fieldStartsWith: function(fieldName, prefix){
		return function(element) {
			return matching.startsWith(prefix)(element[fieldName]);
		};
	},

	fieldEndsWith: function(fieldName, suffix){
		return function(element) {
			return matching.endsWith(suffix)(element[fieldName]);
		};
	},

	fieldContains: function(fieldName, substring){
		return function(element){						
			return matching.contains(substring)(element[fieldName]);
		};
	}

};
