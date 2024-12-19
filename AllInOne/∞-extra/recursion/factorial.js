function factorial(number) {
  /*
  // base point
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
  */

  /**
  * @Refactor <!--   -->
  |
  | -> turnary operator
 */

  return number === 0 ? 1 : number * factorial(number - 1);
}
console.log(factorial(5)); // 120

/**
  * @Refactor <!--   -->
  |
  | -> arrow function
 */

const factoriaL = (number) =>
  number === 0 ? 1 : number * factorial(number - 1);
