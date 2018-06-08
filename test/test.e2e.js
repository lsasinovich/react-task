const expect = require('chai').expect;

describe('My React Test', () => {
  beforeEach(() => {
    browser.url('localhost:3001');
    browser.waitForText('.header');
  });

  it('should find find-movie div', () => {
    browser.waitForText('.find-movie');

    const pageHeading = browser.getText('.find-movie');

    expect(pageHeading).to.equal('FIND YOUR MOVIE');

    browser.setValue('.search-bar', 'test123');

    expect(browser.getValue('.search-bar')).to.equal('test123');
  });
});
