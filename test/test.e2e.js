const expect = require('chai').expect;

describe('My React Test', function () {
  beforeEach(function() {
    browser.url('localhost:3001');
    browser.waitForText('.header');
  })

  it('should find find-movie div', function () {
    browser.waitForText('.find-movie');

    let pageHeading = browser.getText('.find-movie');

    expect(pageHeading).to.equal('FIND YOUR MOVIE');

    browser.setValue('.search-bar', 'test123');

    expect(browser.getValue('.search-bar')).to.equal('test123');
  })
})