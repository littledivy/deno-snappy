import { assertEquals } from "https://deno.land/std@0.54.0/testing/asserts.ts";
import { compress } from "./mod.ts";

Deno.test({
  name: "toVigenere",
  fn: () => {
    // assertEquals(toVigenere("bruh", "u"), "V");
    console.log(compress(new TextEncoder().encode("hello there!")));
  },
});
