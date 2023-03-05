# Why https import ?

Deno's import system is not the same as Node.js's import system because Deno was designed to address some of the limitations and security issues of Node.js's import system.

Here are some of the key differences between Deno's import system and Node.js's import system:

Security: In Node.js, modules can run arbitrary code during import, which can potentially be a security risk. In Deno, modules are executed in a secure sandbox and cannot access the file system or network by default, unless explicitly granted permission by the user.

Standard Library: Deno includes a set of standard modules in the runtime, similar to Python or Ruby, which are included with the runtime and don't require installation. Node.js, on the other hand, relies on npm to manage packages and dependencies.

URL-based imports: Deno supports importing modules directly from a URL, while Node.js relies on the npm registry or the require function to import modules from the local file system or remote repositories.

File extensions: Deno requires explicit file extensions (e.g. .ts or .js) when importing modules, while Node.js will automatically look for modules with the specified name and .js extension.

Overall, Deno's import system was designed to be more secure, simpler, and more modern than Node.js's import system, while still maintaining compatibility with the existing ecosystem of JavaScript and TypeScript modules.



# Bench

```bash
➜  01_testing git:(main) ✗ deno bench
Check file:///deno-api-study/01_testing/bench.ts
cpu: Apple M1 Pro
runtime: deno 1.31.1 (aarch64-apple-darwin)

file:////deno-api-study/01_testing/bench.ts
benchmark            time (avg)             (min … max)       p75       p99      p995
------------------------------------------------------- -----------------------------
sum 100 numbers    4.24 µs/iter     (4.15 µs … 4.41 µs)   4.36 µs   4.41 µs   4.41 µs
```

### Sources

https://deno.land/api@v1.31.1?s=Deno.bench

# Test

### Testing

```bash
  01_testing git:(main) ✗ deno test
Check file:///deno-api-study/01_testing/test.ts
running 3 tests from ./test.ts
formatCurrency should return a string in currency format ... ok (5ms)
formatCurrency should throw an error for negative values ... ok (3ms)
formatCurrency should throw an error for non-numeric values ... ok (3ms)

ok | 3 passed | 0 failed (27ms)
```

### Sources

https://deno.land/manual@v1.31.0/basics/testing/assertions
