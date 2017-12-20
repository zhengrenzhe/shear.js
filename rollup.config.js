import serve from 'rollup-plugin-serve';
import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

let plugins = [typescript()];
if (process.env.NODE_ENV === 'development') {
	plugins = plugins.concat([serve({
		verbose: true,
		contentBase: ['example', 'dist']
	})]);
}
if (process.env.NODE_ENV === 'production') {
	plugins = plugins.concat([
		uglify({}, minify)
	]);
}

export default [{
		input: 'src/index.ts',
		output: {
			file: 'dist/shear.js',
			format: 'es'
		},
		plugins
	},
	{
		input: 'src/index.ts',
		output: {
			file: 'dist/shear-umd.js',
            format: 'umd',
            name:'shear'
		},
		plugins
	}
]
