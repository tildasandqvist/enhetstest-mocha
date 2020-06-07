const assert = require('assert'),
  {
    greet
  } = require('../index.js')

describe('index', function () {
  it('Returns "Välkommen till ett Blackjack-spel!"', function () {
    assert.strictEqual(greet(), 'Välkommen till ett Blackjack-spel!')
  })
})