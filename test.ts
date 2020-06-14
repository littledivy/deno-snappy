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
