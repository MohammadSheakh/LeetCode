function countDown(number) {
  if (number === 2) {
    console.log("Reached base case");
    return;
  }

  console.log(number);

  countDown(number - 1);
}
countDown(4);
