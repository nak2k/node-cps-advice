const test = require('tape');
const {
  compose,
  identity,
} = require('..');

test('test copose()', t => {
  t.plan(2);

  const incr = next => (value, callback) => {
    next(value + 1, callback);
  };

  compose(
    incr,
    incr,
    false,
    '',
    identity,
    incr
  )((value, callback) => {
    callback(null, value);
  })(0, (err, result) => {
    t.error(err);
    t.equal(result, 3);
  });
});

test('test compose()', t => {
  t.plan(5);

  t.equal(compose(), identity);

  const foo = next => () => {};

  t.equal(compose(foo), foo);

  t.equal(compose(false, foo), foo);

  t.equal(compose(identity, foo), foo);

  t.notEqual(compose(foo, false, foo), foo);
});
