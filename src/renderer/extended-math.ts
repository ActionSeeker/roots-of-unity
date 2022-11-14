export class ExtendedMath {
    public static convertDegreeToRadians(degree: number): number {
        return (Math.PI / 180) * degree
    }

    public static isAlmostInteger(quantity: number, epsilon: number = 0.01) {
        console.log('value', Math.abs(quantity - Math.round(quantity)))
        return Math.abs(quantity - Math.round(quantity)) < Math.abs(epsilon)
    }
}
