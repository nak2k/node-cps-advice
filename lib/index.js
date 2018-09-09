const arg1Advice = next => arg1 => next(arg1);
const arg2Advice = next => (arg1, arg2) => next(arg1, arg2);
const arg3Advice = next => (arg1, arg2, arg3) => next(arg1, arg2, arg3);
const arg4Advice = next => (arg1, arg2, arg3, arg4) => next(arg1, arg2, arg3, arg4);
const arg5Advice = next => (arg1, arg2, arg3, arg4, arg5) => next(arg1, arg2, arg3, arg4, arg5);

const callbackAdvice = advice => fn =>
  function() {
    const lastIndex = arguments.length - 1;
    arguments[lastIndex] = advice(arguments[lastIndex]);
    return fn.apply(this, arguments);
  };

const compose = (...fns) => {
  fns = fns.filter(fn => fn && fn !== identity);

  switch (fns.length) {
    case 0:
      return identity;
    case 1:
      return fns[0];
    default:
      return next => fns.reduceRight((next, fn) => fn(next), next);
  }
};

const constAdvice = value => next => (err, result) =>
  err ? next(err) : next(null, value);

const identity = next => next;

const mapAdvice = mapper => next => (err, result) =>
  err ? next(err) : next(null, mapper(result));

/*
 * Exports.
 */
exports.arg1Advice = arg1Advice;
exports.arg2Advice = arg2Advice;
exports.arg3Advice = arg3Advice;
exports.arg4Advice = arg4Advice;
exports.arg5Advice = arg5Advice;
exports.callbackAdvice = callbackAdvice;
exports.compose = compose;
exports.constAdvice = constAdvice;
exports.identity = identity;
exports.mapAdvice = mapAdvice;
