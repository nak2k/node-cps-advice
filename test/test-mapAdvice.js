const test = require('tape');
const {
  mapAdvice,
} = require('..');

const double = x => x * 2;

test('test mapAdvice()', t => {
  t.plan(2);

  const fn = mapAdvice(double)((err, result) => {
    t.error(err);
    t.equal(result, 246);
  });

  fn(null, 123);
});

test('test mapAdvice() error handling', t => {
  t.plan(2);

  const fn = mapAdvice(double)((err, result) => {
    t.ok(err instanceof Error);
    t.notEqual(result, 246);
  });

  fn(new Error());
});
