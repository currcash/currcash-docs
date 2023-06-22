// ___ $ @preact ___
import { signal } from '@preact/signals'

export default function usePackageName(initialValue: string) {
  const packageName = signal(initialValue)

  // Methods
  const setToNpm = (): void => {
    packageName.value = 'npm i currcash'
  }

  const setToYarn = (): void => {
    packageName.value = 'yarn add currcash'
  }

  const setToPnpm = (): void => {
    packageName.value = 'pnpm i currcash'
  }

  return {
    packageName,
    setToNpm,
    setToYarn,
    setToPnpm
  }
}
