import { ColorParams } from './colour-params'
import { MathParams } from './math-params'

export type SlidableParams<T> = MathParams<T> | ColorParams<T>
