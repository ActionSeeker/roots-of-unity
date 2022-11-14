import { MathParams } from '../interfaces/math-params'
import { ValueRange } from '../interfaces/value-range'

export const MATH_PARAMS_RANGE: MathParams<ValueRange> = {
    surd: { max: 1400, min: 1 },
    radius: { max: 500, min: 1 },
}

export const MATH_PARAMS_MANIPULABLE: MathParams<number> = {
    surd: 5,
    radius: 1,
}
