import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    external:[
      "react"
    ],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      del({ targets: 'dist/*' }),
      resolve(),
      postcss({
        minimize: true,
        modules: false,
        extract: "styles.min.css"
      }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      copy({
        targets: [
          {
            src: ["src/components/imgs/*"],
            dest: "./dist/imgs"
          },
        ],
        verbose: true
      })
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/, 'react'],
  },
];