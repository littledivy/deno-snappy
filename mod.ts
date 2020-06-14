import init, {
  source,
  compress as wasm_compress,
  decompress as wasm_decompress
} from "./wasm.js";

await init(source);

export function compress(input: Uint8Array) {
  return wasm_compress(input);
}

export function decompress(input: Uint8Array) {
  return wasm_decompress(input)
}
