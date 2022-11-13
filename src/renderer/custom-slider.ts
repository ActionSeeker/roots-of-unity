import * as DatGui from 'dat.gui'
import {
    COLOR_PARAMS_MANIPULABLE,
    COLOR_PARAMS_RANGE,
} from './config/colour-params-config'
import {
    MATH_PARAMS_MANIPULABLE,
    MATH_PARAMS_RANGE,
} from './config/math-params-config'
import { ColorParams } from './interfaces/colour-params'
import { MathParams } from './interfaces/math-params'
import { SlidableParams } from './interfaces/type-unions'
import { ValueRange } from './interfaces/value-range'

export class CustomSlider {
    private slider: DatGui.GUI
    private surdAndBaseFolder: DatGui.GUI
    private colorFolder: DatGui.GUI
    private manipulableMathObjectState: MathParams<number> =
        MATH_PARAMS_MANIPULABLE
    private manipulateColorObjectState: ColorParams<number> =
        COLOR_PARAMS_MANIPULABLE

    private static readonly SURD_AND_BASE_FOLDER: string = 'Surds and Base'
    private static readonly COLOR_FOLDER: string = 'Color'

    constructor() {
        this.slider = new DatGui.GUI()
        this.surdAndBaseFolder = this.createFolder(
            CustomSlider.SURD_AND_BASE_FOLDER,
            MATH_PARAMS_RANGE,
            this.manipulableMathObjectState
        )
        this.colorFolder = this.createFolder(
            CustomSlider.COLOR_FOLDER,
            COLOR_PARAMS_RANGE,
            this.manipulateColorObjectState
        )
        this.surdAndBaseFolder.open()
        this.colorFolder.open()
    }

    private createFolder(
        folderName: string,
        valueRanges: SlidableParams<ValueRange>,
        manipulableObject: SlidableParams<number>
    ): DatGui.GUI {
        let folder: DatGui.GUI = this.slider.addFolder(folderName)
        Object.keys(valueRanges).forEach((key) => {
            const values: ValueRange =
                valueRanges[key as keyof SlidableParams<ValueRange>]
            folder.add(manipulableObject, key, values.min, values.max)
        })
        return folder
    }

    public getManipulableMathObjectState(): MathParams<number> {
        return this.manipulableMathObjectState
    }

    public getManipulableColorObjectState(): ColorParams<number> {
        return this.manipulateColorObjectState
    }
}
