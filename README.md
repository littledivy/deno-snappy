# deno-ciphers

[![stars](https://img.shields.io/github/stars/divy-work/deno-ciphers)](https://github.com/divy-work/deno-ciphers/stargazers)
[![issues](https://img.shields.io/github/issues/divy-work/deno-ciphers)](https://github.com/divy-work/deno-ciphers/issues)
![deno version](https://img.shields.io/badge/deno-1.0.3-success)
[![vr scripts](https://badges.velociraptor.run/flat.svg)](https://velociraptor.run)

Encipher and Decipher implementation for Deno.

## Implementations

- [x] Vigenere
- [x] ADFGVX
- [x] ADFGX
- [x] Affine
- [x] Atbash
- [x] Autokey
- [x] Beaufort
- [x] Caesar
- [x] ColumnarTransposition
- [x] FourSquare
- [x] FractionatedMourse
- [ ] PlayFair
- [x] PolybiusSqaure
- [x] Porta
- [x] RailFence
- [x] Rot13
- [x] RunningKey
- [x] Substitution

## Example

```typescript
import { toVigenere, fromVigenere } from 'mod.ts';

toVigenere("key", "string"); // "CXPSRE"
fromVigenere("key", "CXPSRE"); // "string"
```

## Rules

* __Vigenere__
  * key should be alphabetic.

* __ADFGVX__
  * key < 36 in length.
  * key should not contain repeated chars.
  * key and keyword should be a valid ascii.

* __ADFGX__
  * key < 25 in length.
  * key should not contain repeated chars.
  * key and keyword should be a valid ascii.

* __Affine__
  * `a` should be in the range [1, 25].
  * `b` should be in the range [1, 25].
  * `a` should not be relatively prime to 26.

* __Atbash__
  * no rules

* __AutoKey__
  * key should be alphabetic.

* __Beaufort__
  * key should be alphabetic.

* __Caesar__
  * no rules

* __ColumnarTransposition__
  * key should be a valid ascii.

* __FourSquare__
  * alphabet, key1, key2 should be 25 chars in length.
  * alphabet should be a valid ascii.
  * alphabet, key1, key2 should not contain repeated chars.
  * All of the chars in key1 and key2 should be in alphabet.
  * pad should be contained in alphabet.

* __Playfair__
  * key should 25 chars in length.
  * key should be a valid ascii.
  * key should not contain repeated characters.
  * pad should not be contained within key.

* __PolybiusSqaure__
  * key should be a valid ascii.
  * key should not contain repeated characters.
  * chars should be a valid ascii.
  * chars should not contain repeated characters.
  * length of chars should be equal to `sqrt(key.length())`, and key should be of length `chars.length()^2`.

* __Porta__
  * key should be alphabetic.

* __RailFence__
  * key should not be less than or equal to 0.

* __RunningKey__
  * key should be alphabetic.

* __Substitution__
  * key should be 26 characters in length.
  * key should not contain repeated chars.
  * key should be alphabetic.

## Building from source

### Prerequisites

- [deno](https://deno.land/)
- [rust](https://www.rust-lang.org/)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/)

## Building
```bash
$ deno run -A scripts/build.ts
```

## Testing

Requires `wasm.js` to be built first.

```bash
$ deno test
```

### Contribution

Pull request, issues and feedback are very welcome. Code style is formatted with `deno fmt` and commit messages are done following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) spec.

### Licence

Copyright 2020, Divy Srivastava. All rights reserved. MIT license.
