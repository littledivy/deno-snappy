extern crate snap;
use wasm_bindgen::prelude::wasm_bindgen;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn compress(input: &[u8]) -> Vec<u8> {
    let mut encoder = snap::raw::Encoder::new();
    snap::raw::Encoder::compress_vec(&mut encoder, input).unwrap()
}
