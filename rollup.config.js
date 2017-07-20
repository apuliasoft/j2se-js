import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';
import * as tsc from 'typescript';
import { argv } from 'yargs';

let CONFIG;

if (process.env.es2015) {
  CONFIG = {
    format: 'es',
    plugins: [
      typescript({
        typescript: tsc,
        module: 'es2015',
        target: 'es2015',
        types: [],
        exclude: [
          'node_modules',
          '**/*.spec.ts'
        ]
      })
    ]
  };
}

if (process.env.es5) {
  CONFIG = {
    format: 'es',
    plugins: [
      typescript({
        typescript: tsc,
        module: 'es2015',
        target: 'es5',
        types: [],
        exclude: [
          'node_modules',
          '**/*.spec.ts'
        ]
      })
    ],
    external: ['tslib']
  };
}

if (process.env.umd) {
  CONFIG = {
    format: 'umd',
    exports: 'named',
    moduleName: argv.name,
    plugins: [
      typescript({
        typescript: tsc,
        module: 'es2015',
        target: 'es5',
        types: [],
        exclude: [
          'node_modules',
          '**/*.spec.ts'
        ]
      })
    ],
    external: ['tslib']
  };
}

if (process.env.min) {
  CONFIG = {
    format: 'umd',
    exports: 'named',
    moduleName: argv.name,
    plugins: [
      typescript({
        typescript: tsc,
        module: 'es2015',
        target: 'es5',
        types: [],
        exclude: [
          'node_modules',
          '**/*.spec.ts'
        ]
      }),
      uglify()
    ],
    external: ['tslib']
  };
}

export default CONFIG;
