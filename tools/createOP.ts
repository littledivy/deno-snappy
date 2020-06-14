export default function createOP(fn: string) {
  return `
  #[wasm_bindgen]
  pub fn ${fn.toLowerCase()}(key: String, text: String) -> String {
      let ciph = ${fn}::new(&key);
      // encipher
      let ctext = ciph.encipher(&text).unwrap();
      ctext
  }

  #[wasm_bindgen]
  pub fn from_${fn.toLowerCase()}(key: String, text: String) -> String {
      let ciph = ${fn}::new(&key);
      // decipher
      let ptext = ciph.decipher(&text).unwrap();
      ptext
  }
  `;
}

console.log(createOP(Deno.args[0]));
