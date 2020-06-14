import init, {
  source,
  compress as wasm_compress
} from "./wasm.js";

await init(source);

export function compress(input: Uint8Array) {
  return wasm_compress(compress);
}
