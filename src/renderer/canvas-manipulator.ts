export class CanvasManipulator {
    private canvas: HTMLCanvasElement
    private context: CanvasRenderingContext2D
    public constructor(id: string) {
        this.canvas = document.getElementById(id) as HTMLCanvasElement
        if (!this.canvas) {
            throw new Error(`No canvas with the given id={${id}} accessible`)
        }
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D
        this.setCanvasHeightAndWidth()
    }

    private setCanvasHeightAndWidth() {
        this.canvas.height = window.innerWidth
        this.canvas.height = window.innerHeight
    }

    // private animate() {
    //     requestAnimationFrame(animate)
    //     // context.clearRect(0, 0, canvasWidth, canvasHeight);
    //     context.fillStyle = '#111111'
    //     context.fillRect(0, 0, canvasWidth, canvasHeight)
    //     context.beginPath()
    //     // We start always from the middle
    //     context.moveTo(canvasWidth / 2, canvasHeight / 2)
    //     // We create a series of small lines that would create points
    //     for (let i = 0; i <= manipulable.angle; i += 1) {
    //         // let polarcoors: PolarCoordinates = polarPlotter(i + increment);
    //         // let coordinates: Coordinates = polarToRectCoordinates(polarcoors);
    //         // context.lineTo(
    //         //   canvasWidth / 2 + coordinates.x * manipulable.amplitude,
    //         //   canvasHeight / 2 + coordinates.y * manipulable.amplitude
    //         // );
    //         let polarcoors: PolarCoordinates[] = multiplePolarPlotter(
    //             i + increment
    //         )
    //         let coordinates: Coordinates[] = []
    //         polarcoors.forEach((p) =>
    //             coordinates.push(polarToRectCoordinates(p))
    //         )
    //         coordinates.forEach((c) => {
    //             context.lineTo(
    //                 manipulable.xOffset + c.x * manipulable.amplitude,
    //                 manipulable.yOffset + c.y * manipulable.amplitude
    //             )
    //         })
    //     }
    //     increment += manipulable.rotation
    //     hue = (hue + 1) % 359
    //     context.strokeStyle = `hsl(${hue}, ${colours.s}%, ${colours.l}%)`
    //     context.stroke()
    // }
}
