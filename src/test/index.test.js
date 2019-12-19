const expect = require('chai').expect

const subject = require('../index')


describe('Yahtzee', () => {
  context('Given Ones, Twos, Threes, Fours, Fives, Sixes', () => {
    it('returns the sum of all numbers', () => {
      const diceRoll = [1,2,3,4,5,6]
      
      // @TODO: Replace this assertion with the expected behavior.
      expect(() => subject(diceRoll)).to.not.throw()
    })
  })
})
