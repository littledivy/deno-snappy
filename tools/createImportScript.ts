export default function createImportScript(name: string) {
  return `
  ${name.toLowerCase()} as wasm_to_${name.toLowerCase()},
  from_${name.toLowerCase()} as wasm_from_${name.toLowerCase()},

  export function to${name}(key: string, text: string): string {
    return wasm_to_${name.toLowerCase()}(key, text);
  }

  export function from${name}(key: string, text: string): string {
    return wasm_from_${name.toLowerCase()}(key, text);
  }`;
}

console.log(createImportScript(Deno.args[0]));
