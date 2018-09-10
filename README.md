# cps-advice

CPS-based advice library.

## Installation

```
npm i cps-advice
```

## Terminologies

### Advice

In this package, the Advice is defined as a function that returns a function that has a same form for an original function passed as an argument.
In order to apply an advice, it calls the advice function with passing an original function as an argument.
By applying an advice, it can add an additional behavior to an original function.

An example is shown below.

``` javascript
const logAdvice = next => {
  console.log('In logAdvice');
  return () => next();
};

const task = () => {
  // Do something.
};

const taskWithLogging = logAdvice(task);
```

This package provides utilities to make the Advice easier to use when programming with [Continuation-passing style (CPS)](https://en.wikipedia.org/wiki/Continuation-passing_style).

### Adviser

The Adviser is defined as a function that generates an Advise.

## API

### callbackAdviser(advice)

Generate an advice that applies a specified advice to a callback.

- `advice`
    - An advice that is applied to an callback.

An advice that is generated can be applied only a function that has a callback as a last argument.

``` javascript
const callbackLogAdvice = next => {
  console.log('In callbackLogAdvice');
  return (err, result) => next(err, result);
};

callbackAdviser(callbackLogAdvice)(readFile)('path/to/file', (err, file) => {
  // This callback is called after the callbackLogAdvice().
});
```

## License

MIT
