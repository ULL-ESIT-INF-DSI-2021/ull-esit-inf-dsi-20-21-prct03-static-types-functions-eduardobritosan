/**
 * Funcion de onepunch de Chuck Norris
 * @param {string} plainText la cadena a filtrar
 * @return {string} la cadena filtrada
 */
function onePunch(plainText: string): string {
  return (plainText === "") ? "Broken!" : plainText.replace(/e/ig, "")
    .replace(/a/ig, "").split(" ").sort().join();
}

console.log(onePunch("Beard Jeans Hairbrush Knuckleduster Sand"));
console.log(onePunch("Sock Beard Vest Lady Sage"));
console.log(onePunch("Beard Sack Gun Parachute Face-Kicking-Shoes"));
console.log(onePunch("Snot Snow Soda Tank Beard"));
console.log(onePunch(""));
