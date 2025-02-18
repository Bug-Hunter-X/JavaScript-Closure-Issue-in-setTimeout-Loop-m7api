# JavaScript Closure Issue in setTimeout Loop

This repository demonstrates a common JavaScript closure issue that can occur when using `setTimeout` within a loop. The problem arises because the callback function within `setTimeout` doesn't capture the value of `i` at the time it's created, but rather captures a reference to the variable `i`.  This leads to unexpected behavior where the final value of `i` (10) is logged multiple times instead of the expected sequence of numbers from 0 to 9.

## Bug Description:
The `bug.js` file contains a function `myFunc` that uses a `for` loop and `setTimeout` to log the value of `i`.  Because of the closure issue, all callbacks log the value of `i` *after* the loop has completed, resulting in 10 being logged ten times.

## Solution:
The solution in `bugSolution.js` utilizes an immediately invoked function expression (IIFE) to create a new scope for `i`, ensuring each callback captures its own unique value of `i` at the time of its creation.