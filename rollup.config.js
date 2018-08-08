import typescript from "rollup-plugin-typescript2";
import { uglify } from "rollup-plugin-uglify";

export default {
    input: "src/shear.js.ts",
    output: {
        dir: "dist",
        file: "shear.js",
        format: "umd",
        name: "shear",
    },
    plugins: [
        typescript({
            tsconfig: "tsconfig.json",
        }),
        uglify(),
    ],
};
