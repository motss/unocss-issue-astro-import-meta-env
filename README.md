# Missing import.meta.env using unocss@66 on astro 5

## Pre-requisites

```json
// This is the version of node and pnpm I use on my machine.
"engines": {
  "node": "23.8.0",
  "pnpm": "10.4.1"
}
```

## Steps to reproduce
1. Run `pnpm install` to install all dependencies.
1. Run `pnpm dev` to run astro in dev mode.
1. You will see the following logs in the terminal.
   ```sh
   undefined # this logs the value from import.meta.env
   Cannot read properties of undefined (reading 'NODE_ENV') # this is the error due to missing import.meta.env
   ```
1. Done.

## Reinstall with unocss@65.4.3
1. Update and pin the version of `unocss` to `65.4.3`.
   ```diff
   - "unocss": "66.0.0"
   - "unocss": "65.4.3"
   ```
1. Force install all dependencies by running `pnpm install --force`.
1. Run `pnpm dev` and no errors.
1. Done.

## References
1. https://github.com/unocss/unocss/issues/4441
