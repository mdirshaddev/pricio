/**
 * The `debounce` function is a TypeScript implementation of a debounce function that delays the
 * execution of a function until a certain amount of time has passed since the last invocation.
 * @param {Function} fn - The `fn` parameter is the function that you want to debounce. It is the
 * function that will be called after the debounce period has elapsed without any further function
 * calls.
 * @param [ms=300] - The `ms` parameter is the number of milliseconds to wait before invoking the `fn`
 * function. It is an optional parameter with a default value of 300 milliseconds.
 * @returns The debounce function returns a new function that wraps the original function passed as an
 * argument.
 */
export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
