import typescript from '@rollup/plugin-typescript';

export default {
    input: 'index.ts',
    output: {
        dir: './',
        format: 'cjs'
    },
    plugins: [
        typescript(),
    ],
};