import { expect } from 'chai'
import babyThings from '.'

describe('baby-things', function () {
  it('should have a list of all available names', function () {
    expect(babyThings.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', function () {
    expect(babyThings.random()).to.satisfy(isIncludedIn(babyThings.all))
  })
})

function isArrayOfStrings (array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn (array) {
  return item => array.includes(item)
}
