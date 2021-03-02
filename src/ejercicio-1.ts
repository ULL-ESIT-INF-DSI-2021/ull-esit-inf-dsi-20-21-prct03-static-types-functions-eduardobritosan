/**
 * Revisa si un año es bisiesto
 * @param {number} year el año que se pasa a la función
 * @return {boolean} verdadero si es bisiesto falso si no
 */
function isLeapYear(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 == 0);
}

console.log(isLeapYear(2000));
