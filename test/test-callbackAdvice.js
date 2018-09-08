const test = require('tape');
const {
  callbackAdvice,
} = require('..');

function sum() {
  const args = [...arguments];
  const callback = args.pop();

  const result = args.reduce((acc, v) => acc + v);

  callback(null, result);
}

test('test callbackAdvice()', t => {
  t.plan(5);

  let step = 0;

  const stepAdvice = expected => next => {
    t.equal(++step, expected);

    return function() {
      return next.apply(this, arguments);
    };
  };

  const advisedSum = callbackAdvice(stepAdvice(2))(stepAdvice(1)(sum));

  advisedSum(1, 2, 3, (err, result) => {
    t.error(err);
    t.equal(++step, 3);
    t.equal(result, 6);
  });
});
