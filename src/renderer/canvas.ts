export class CanvasController {
    private canvas: HTMLCanvasElement
    private context: CanvasRenderingContext2D
    public constructor(private document: Document, id: string) {
        this.canvas = this.document.getElementById(id) as HTMLCanvasElement
    }
}
