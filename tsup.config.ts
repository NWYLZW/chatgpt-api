import { defineConfig } from 'tsup'

const common = {
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  minify: false,
  shims: true,
  dts: true,
  external: ['undici']
}

export default defineConfig([
  {
    ...common,
    outDir: 'build',
    target: 'node16',
    platform: 'node',
    format: ['esm']
  },
  {
    ...common,
    outDir: 'build',
    target: 'node14',
    platform: 'node',
    format: ['cjs'],
    noExternal: ['p-timeout', 'strip-markdown']
  },
  {
    ...common,
    outDir: 'build/browser',
    target: 'chrome89',
    platform: 'browser',
    format: ['esm']
  }
])
