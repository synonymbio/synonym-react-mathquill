// webpack loaders are used to configure mathquill as a commonjs module, see webpack.config.js
const MathQuill = require('../mathquill/mathquill-basic.min.js')
const MQ = MathQuill.getInterface(2)

export default MQ
