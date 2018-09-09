const test = require('tape');
const { identity } = require('..');

test('test identity()', t => {
  t.plan(1);

  t.equal(identity(123), 123);
});
