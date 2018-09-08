const callbackAdvice = advice => fn =>
  function() {
    const lastIndex = arguments.length - 1;
    arguments[lastIndex] = advice(arguments[lastIndex]);
    return fn.apply(this, arguments);
  };

/*
 * Exports.
 */
exports.callbackAdvice = callbackAdvice;
