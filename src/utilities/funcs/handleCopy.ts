export const handleCopy = (text: string): void => {
  navigator.clipboard.writeText(text)
}
