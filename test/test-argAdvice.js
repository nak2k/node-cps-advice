const test = require('tape');
const {
  arg1Advice,
  arg2Advice,
  arg3Advice,
  arg4Advice,
  arg5Advice,
} = require('..');

test('test argAdvice()', t => {
  t.plan(5);

  const arg1Fn = arg1Advice(function() { t.equal(arguments.length, 1) });
  const arg2Fn = arg2Advice(function() { t.equal(arguments.length, 2) });
  const arg3Fn = arg3Advice(function() { t.equal(arguments.length, 3) });
  const arg4Fn = arg4Advice(function() { t.equal(arguments.length, 4) });
  const arg5Fn = arg5Advice(function() { t.equal(arguments.length, 5) });

  [arg1Fn, arg2Fn, arg3Fn, arg4Fn, arg5Fn].forEach(fn => fn(1, 2, 3, 4, 5, 6));
});
