/**
 * Recibe un ISBN y comprueba su validez
 * @param {string} isbnString el codigo ISBN en cuestión
 * @return {boolean} la validez del codigo
 */
function isValidISBN(isbnString: string): boolean {
  let iter: number = 10;
  let sum: number = 0;
  isbnString.replace(/-/g, "").split("").forEach((element: string,
    index: number) => {
    if (element.match(/x/i)) {
      console.log("eseee");
      sum = sum + (10 * iter);
    } else {
      console.log(isbnString.replace(/-/g, ""));
      sum = sum + (parseInt(element) * iter);
    }
    iter--;
  });
  if (sum % 11 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidISBN("3-598-21507-X"));
