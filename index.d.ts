declare module '@synonym-bio/react-mathquill' {
  import * as React from 'react'

  export function addStyles(): void

  export interface StaticMathFieldProps
    extends React.HTMLAttributes<HTMLSpanElement> {
    children?: string
    mathquillDidMount?: (mathField: MathField) => void
  }

  export interface EditableMathFieldProps
    extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onChange'> {
    onChange?: (mathField: MathField) => void
    latex?: string
    config?: MathFieldConfig
    mathquillDidMount?: (mathField: MathField) => void
  }

  export const EditableMathField: React.FunctionComponent<EditableMathFieldProps>

  export const StaticMathField: React.FunctionComponent<StaticMathFieldProps>

  export interface MathFieldConfig {
    spaceBehavesLikeTab?: boolean
    leftRightIntoCmdGoes?: 'up' | 'down'
    restrictMismatchedBrackets?: boolean
    sumStartsWithNEquals?: boolean
    supSubsRequireOperand?: boolean
    charsThatBreakOutOfSupSub?: string
    autoSubscriptNumerals?: boolean
    autoCommands?: string
    autoOperatorNames?: string
    substituteTextarea?: () => void
    handlers?: {
      deleteOutOf?: (direction: Direction, mathField: MathField) => void
      moveOutOf?: (direction: Direction, mathField: MathField) => void
      selectOutOf?: (direction: Direction, mathField: MathField) => void
      downOutOf?: (mathField: MathField) => void
      upOutOf?: (mathField: MathField) => void
      edit?: (mathField: MathField) => void
      enter?: (mathField: MathField) => void
    }
    maxDepth?: number
  }

  export enum Direction {
    R,
    L,
  }

  // Represents one character that belongs to an identifier.
  export interface IdentifierToken {
    id: string | number
    text: string
    type: 'letter' | 'number' | 'underscore' | 'period' | 'quote' | 'unknown'
    belongsTo: 'object' | 'property' | 'period' | 'literal' | 'none'
    element: Element | Text | undefined
    setElement: (element: Element | Text | undefined) => void
  }  

  export interface MathField {
    revert(): void
    reflow(): void
    el(): HTMLElement
    latex(): string
    latex(latexString: string): void
    text(): string
    focus(): void
    blur(): void
    write(latex: string): void
    cmd(latexString: string): void
    select(): void
    clearSelection(): void
    moveToLeftEnd(): void
    moveToRightEnd(): void
    keystroke(keys: string): void
    typedText(text: string): void
    config(newConfig: MathFieldConfig): void
    parseSemanticTypes(): IdentifierToken[][]
  }
}
