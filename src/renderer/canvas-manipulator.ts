import { CustomSlider } from './custom-slider'
import { ExtendedMath } from './extended-math'

export class CanvasManipulator {
    private canvas: HTMLCanvasElement
    private context: CanvasRenderingContext2D
    public constructor(id: string, private slider: CustomSlider) {
        this.canvas = document.getElementById(id) as HTMLCanvasElement
        if (!this.canvas) {
            throw new Error(`No canvas with the given id={${id}} accessible`)
        }
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D
        this.setCanvasHeightAndWidth()
    }

    private setCanvasHeightAndWidth() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
    }

    private setCanvasColor(colorHex: string = '#111111') {
        this.context.fillStyle = colorHex
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }

    public animate() {
        requestAnimationFrame(this.animate.bind(this))
        this.setCanvasColor()
        this.context.beginPath()
        let initialAngle = 0
        let finalAngle = 360
        let { radius, surd } = this.slider.getManipulableMathObjectState()
        let color = this.slider.getManipulableColorObjectState()
        let initialHue = color.hue
        let sector = (Math.PI * 2) / surd
        this.context.moveTo(this.canvas.width / 2, this.canvas.height / 2)
        while (initialAngle < finalAngle) {
            initialHue += initialHue % 359

            let computedX =
                this.canvas.width / 2 +
                radius *
                    Math.cos(ExtendedMath.convertDegreeToRadians(initialAngle))
            let computedY =
                this.canvas.height / 2 +
                radius *
                    Math.sin(ExtendedMath.convertDegreeToRadians(initialAngle))

            // this.context.lineTo(computedX, computedY)

            let gradient = this.context.createConicGradient(
                0,
                computedX / 2,
                computedY / 2
            )

            gradient.addColorStop(0, 'red')
            gradient.addColorStop(0.25, 'orange')
            gradient.addColorStop(0.5, 'green')
            gradient.addColorStop(0.75, 'green')
            gradient.addColorStop(1, 'blue')

            this.context.fillStyle = gradient
            this.context.fillRect(computedX, computedY, 5, 5)

            initialAngle += 360 / surd
        }
    }
}
