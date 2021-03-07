/**
 * Funcion que convierte de IP a entero
 * @param ip La ip que se desea convertir en entero
 */
export function ipToInt(ip: string): number {
  const splitIp: string[] = ip.split(".");
  return ((((((+splitIp[0]) * 256) + (+splitIp[1])) * 256) +
    (+splitIp[2])) * 256) + (+splitIp[3]);
}

/**
 * Calculadora de cuantas direcciones IPs existen entre un rango.
 * @param ipStart Dirección de inicio
 * @param ipEnd  Direccion de final
 */
export function ipCalc(ipStart: string, ipEnd: string): number {
  return ipToInt(ipEnd) - ipToInt(ipStart);
}

