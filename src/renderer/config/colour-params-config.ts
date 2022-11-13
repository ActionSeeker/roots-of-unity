import { ColorParams } from '../interfaces/colour-params'
import { ValueRange } from '../interfaces/value-range'

export const COLOR_PARAMS_RANGE: ColorParams<ValueRange> = {
    hue: { max: 359, min: 0 },
    saturation: { max: 100, min: 0 },
    luminance: { max: 100, min: 0 },
}

export const COLOR_PARAMS_MANIPULABLE: ColorParams<number> = {
    hue: 100,
    saturation: 50,
    luminance: 50,
}
