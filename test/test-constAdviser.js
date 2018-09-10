const test = require('tape');
const {
  constAdviser,
} = require('..');

test('test constAdvier()', t => {
  t.plan(2);

  const fn = constAdviser(123)((err, result) => {
    t.error(err);
    t.equal(result, 123);
  });

  fn(null, 0);
});

test('test constAdviser() error handling', t => {
  t.plan(2);

  const fn = constAdviser(123)((err, result) => {
    t.ok(err instanceof Error);
    t.notEqual(result, 123);
  });

  fn(new Error());
});
