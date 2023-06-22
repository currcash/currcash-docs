export function existsArray(array: unknown[]): boolean {
  return Array.isArray(array) && array.length > 0
}
