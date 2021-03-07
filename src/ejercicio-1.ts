/**
 * Revisa si un año es bisiesto
 * @param year El año que se pasa a la función
 * @return Verdadero si es bisiesto falso si no
 */
export function isLeapYear(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 == 0);
}
