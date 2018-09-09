const test = require('tape');
const {
  constAdvice,
} = require('..');

test('test constAdvice()', t => {
  t.plan(2);

  const fn = constAdvice(123)((err, result) => {
    t.error(err);
    t.equal(result, 123);
  });

  fn(null, 0);
});

test('test constAdvice() error handling', t => {
  t.plan(2);

  const fn = constAdvice(123)((err, result) => {
    t.ok(err instanceof Error);
    t.notEqual(result, 123);
  });

  fn(new Error());
});
