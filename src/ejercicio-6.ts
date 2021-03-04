/**
 * Recibe un ISBN y comprueba su validez
 * @param isbnString El codigo ISBN en cuestión
 * @return La validez del codigo
 */
function isValidISBN(isbnString: string): boolean {
  let iter: number = 10;
  let sum: number = 0;
  isbnString.replace(/-/g, "").split("").forEach((element: string,
    index: number) => {
    if (element.match(/x/i)) {
      sum = sum + (10 * iter);
    } else {
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
