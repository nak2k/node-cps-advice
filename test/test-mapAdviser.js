const test = require('tape');
const {
  mapAdviser,
} = require('..');

const double = x => x * 2;

test('test mapAdviser()', t => {
  t.plan(2);

  const fn = mapAdviser(double)((err, result) => {
    t.error(err);
    t.equal(result, 246);
  });

  fn(null, 123);
});

test('test mapAdviser() error handling', t => {
  t.plan(2);

  const fn = mapAdviser(double)((err, result) => {
    t.ok(err instanceof Error);
    t.notEqual(result, 246);
  });

  fn(new Error());
});
