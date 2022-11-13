import { MathParams } from '../interfaces/math-params'
import { ValueRange } from '../interfaces/value-range'

export const MATH_PARAMS_RANGE: MathParams<ValueRange> = {
    surd: { max: 14, min: 1 },
    base: { max: 100, min: 1 },
}

export const MATH_PARAMS_MANIPULABLE: MathParams<number> = {
    surd: 5,
    base: 1,
}
