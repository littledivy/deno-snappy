import { assertEquals } from "https://deno.land/std@0.54.0/testing/asserts.ts";
import { compress, decompress } from "./mod.ts";

Deno.test({
  name: "compress",
  fn: () => {
    compress(new TextEncoder().encode("hello there!"));
  },
});

Deno.test({
  name: "decompress",
  fn: () => {
    decompress(compress(new TextEncoder().encode("hello there!")));
  },
});
