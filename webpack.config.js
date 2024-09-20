const path = require('path')

module.exports = (env, args) => ({
  output: {
    library: 'MathquillComponent',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename:
      args.mode == 'production'
        ? 'react-mathquill.min.js'
        : 'react-mathquill.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  target: 'node',
  externals: {
    react: 'react',
  },
  resolve: {
    fallback: {
      url: false,
    },
    alias: {
      '@mathquill': path.resolve(__dirname, 'src/mathquill'),
      // 'fonts': path.resolve(__dirname, 'src/mathquill/fonts'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2|otf|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'font/[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
      // {
      //   test: /mathquill\.css$/,
      //   loader: 'string-replace-loader',
      //   options: {
      //     search: '@font-face {(.|\n)+?}',
      //     replace:
      //       '@font-face {\n' +
      //       '  /* Heavy fonts have been removed */\n' +
      //       '  font-family: Symbola;\n' +
      //       // '  src: url("font/Symbola.woff2") format("woff2"), url("font/Symbola.woff") format("woff");\n' +
      //       // '  src: url("font/Symbola.ttf") format("truetype");\n',
      //       '}',
      //     flags: 'g',
      //   },
      // },
      {
        // You can use `regexp`
        // test: /example\.js/$
        // test: /.*mathquill\/build\/mathquill\.js$/,
        test: /.*mathquill\/mathquill.*\.js$/,
        use: [
          {
            loader: 'exports-loader',
            options: {
              type: 'commonjs',
              exports: {
                syntax: 'single',
                name: 'window.MathQuill',
              },
            },
          },
        ],
      },
    ],
  },
})
