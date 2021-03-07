/**
 * Funcion de onepunch de Chuck Norris
 * @param plainText La cadena a filtrar
 * @return La cadena filtrada
 */
export function onePunch(plainText: string): string {
  return (plainText === "") ? "Broken!" : plainText.replace(/[ae]/ig, "")
    .split(" ").sort().join().replace(/,/g, " ");
}

