var assert = require('chai').assert;

var render = require('..');

describe('email', function() {
  it('should render email', function() {
    var html = render({
      intro: 'Hi!\n\nPlease fill in the survey below:',
      outro: 'Bye!',
      visitor: {id: '1'},
      url: 'http://localhost/survey',
      token: 'aaa',
      language: 'de',
      color: 'orange',
      serviceName: 'ACME'
    });
    assert.isString(html);
    assert.include(html, 'Please fill');
    assert.include(html, 'Bye');
    assert.include(html, 'Sehr wahrscheinlich');
    assert.include(html, 'href="http://localhost/survey?token=aaa&#x26;id=&#x26;rating=10"');
  });
});
