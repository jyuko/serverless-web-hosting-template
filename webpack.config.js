module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/dist`,
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
            loader: 'vue-loader',
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }
    ]},
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },
    performance: { hints: false }
}
