module.exports = {
 entry: './src/index.ts',
 output: {
   filename: './dist/util.js',
   path: __dirname
 },
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       loader: 'ts-loader',
       exclude: /node_modules/,
     },
   ]
 },
 resolve: {
   extensions: [".tsx", ".ts", ".js"]
 },
};