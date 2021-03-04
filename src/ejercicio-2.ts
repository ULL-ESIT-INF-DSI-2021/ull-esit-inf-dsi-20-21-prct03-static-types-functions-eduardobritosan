/**
 * Factorializa un numero entero
 * @param num El año que se pasa a la función
 * @return El valor del numero factorial
 */
function factorialize(num: number): number {
    if (num < 0) {
        return -1;
    } else if (num === 0) {
        return 1;
    } else {
        return (num * factorialize(num - 1));
    }
}

/**
 * Recibe un factorial y devuelve un decimal
 * @param factorial El factorial en string
 * @return El decimal resultante
 */
function factorialToDecimal(factorial: string): number {
    let result: number = 0;
    let pos: number = factorial.length - 1;
    factorial.split("").map((letter: string, index: number) => {
        result = result + (parseInt(letter) * factorialize(pos));
        --pos;
    });
    return result;
}

/**
 * Recibe un factorial y devuelve un decimal
 * @param decimal El decimal en numero entero
 * @return El cociente de la division
 */
function decimalToFactorial(decimal: number): string {
    let iter: number = 1;
    let result: string = "";
    while (decimal != 0) {
        result = (decimal % iter).toString() + result;
        decimal = Math.floor(decimal / iter);
        iter++;
    }
    return result;
}

console.log(`El resultado de pasar 341010 de factorial a decimal es:
${factorialToDecimal("341010")}`);

console.log(`El resultado de pasar 463 de decimal a factorial es:
${decimalToFactorial(463)}`);
