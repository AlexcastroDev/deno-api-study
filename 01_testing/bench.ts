function sum(numbers: number[]): number {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

Deno.bench({
  name: "sum 100 numbers",
  fn: () => {
    const numbers = Array.from({ length: 100 }, () => Math.random());
    sum(numbers);
  },
});
