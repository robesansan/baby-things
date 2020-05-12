import { join } from 'path'

const include = join(__dirname, 'src')

export default {
  entry: './src/index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'babyThings',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader', include}
    ]
  },
  mode: 'development' // same as -d in package script (if we use -p in package script, production mode is chosen)
}