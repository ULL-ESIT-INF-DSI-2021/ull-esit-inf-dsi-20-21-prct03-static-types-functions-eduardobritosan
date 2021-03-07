/**
 * Revisa la validez del nombre de usuario
 * @param username El usuario a revisar
 * @returns true si la cadena es valida y false si no lo es
 */
/* eslint-disable max-len */
export function isValidUsername(username: string): boolean {
  return /^(?!_)((?=.*[a-z]){1,2}(?=.*[0-9]){1,2}(?=.*[A-Z]){1,2}(?=.*[$\-_]){1,2})(?!.*([A-Za-z0-9_$\-])\2{2})([a-z0-9A-Z$\-_]){4,30}([^_])$/g.test(username);
}
