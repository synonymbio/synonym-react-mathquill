import style from '@mathquill/mathquill-basic.css'

export function addStyles() {
  if (document.getElementById('react-mathquill-styles') == null) {
    const styleTag = document.createElement('style')
    styleTag.setAttribute('id', 'react-mathquill-styles')
    styleTag.innerHTML = style[0][1]

    const head = document.getElementsByTagName('head')[0]
    head.appendChild(styleTag)
  }
}

export const EditableMathField = require('./EditableMathField').default
export const StaticMathField = require('./StaticMathField').default

export default EditableMathField
