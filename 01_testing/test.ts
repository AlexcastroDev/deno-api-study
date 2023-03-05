// https://deno.land/std@0.178.0/testing/asserts.ts
import { assertEquals, assertThrows } from "https://deno.land/std/testing/asserts.ts";

function formatCurrency(cents: number): string {
  if (cents < 0 || isNaN(cents)) {
    throw new Error("Invalid value");
  }
  const dollars = Math.floor(cents / 100);
  const centsString = (cents % 100).toString().padStart(2, "0");
  return `$${dollars}.${centsString}`;
}



Deno.test({
  name: "formatCurrency should return a string in currency format",
  fn() {
    assertEquals(formatCurrency(123), "$1.23");
    assertEquals(formatCurrency(456), "$4.56");
    assertEquals(formatCurrency(789), "$7.89");
    assertEquals(formatCurrency(12345), "$123.45");
  },
});

Deno.test("formatCurrency should throw an error for negative values", () => {
  assertThrows(() => formatCurrency(-123));
});

Deno.test("formatCurrency should throw an error for non-numeric values", () => {
  const newLocal = "abc" as unknown as number;
  assertThrows(() => formatCurrency(newLocal));
});

