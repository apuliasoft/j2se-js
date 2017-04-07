module.exports = {
 entry: './src/index.ts',
 output: {
   filename: './dist/core.js',
   path: __dirname
 },
 module: {
   rules: [
     {
       loader: 'ts-loader',
       exclude: /node_modules/,
     },
   ]
 },
 resolve: {
   extensions: [".ts"]
 },
};