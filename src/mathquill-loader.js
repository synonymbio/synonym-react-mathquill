// webpack loaders are used to configure mathquill as a commonjs module, see webpack.config.js
import MathQuill from '@mathquill/mathquill-basic.js';

const MQ = MathQuill.getInterface(MathQuill.getInterface.MAX);

export default MQ
