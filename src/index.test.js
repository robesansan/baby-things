'use strict';

const expect = require('chai').expect;
const babyThings = require('.');

describe('baby-things', function() {
    it('should have a list of all available names', function() {
        expect(babyThings.all).to.satisfy(isArrayOfStrings);
    });

    it('should allow me to get a random name from the list', function() {
        expect(babyThings.random()).to.satisfy(isIncludedIn(babyThings.all));
    });
});

function isArrayOfStrings(array) {
    return array.every(function(i) {
        return typeof i === 'string';
    });
}

function isIncludedIn(array) {
    return function(item) {
        return array.includes(item);
    };
}
