// ___ $ @preact ___
import type h from 'preact'

// ___ $ Common Components ___
import Icon from '@common/Icon'

// ___ $ Components ___
import Copy from '@components/Copy/Copy'

// ___ $ Interfaces ___
import type IPackageManagerSelector from '@interfaces/components/PackageManagerSelector/IPackageManagerSelector'

// ___ $ Signals ___
import usePackageName from '@signals/usePackageName'

const {
  packageName: signalPackageName,
  setToNpm,
  setToYarn,
  setToPnpm
} = usePackageName('npm i currcash')

export default function PackageManagerSelector({
  className
}: IPackageManagerSelector): h.JSX.Element {
  return (
    <div
      className={
        !className
          ? 'packageManagerSelector'
          : `packageManagerSelector ${className}`
      }
    >
      <div className='packageManagerSelectorIcons'>
        <span onClick={setToNpm} draggable={false}>
          <Icon name='npm' title='npm' className='npm' />
        </span>

        <span onClick={setToYarn} draggable={false}>
          <Icon name='yarn' title='yarn' className='yarn' />
        </span>

        <span onClick={setToPnpm} draggable={false}>
          <Icon name='pnpm' title='pnpm' className='pnpm' />
        </span>
      </div>

      <Copy text={signalPackageName.value}>
        <span class='packageManagerSelectorCode'>
          {signalPackageName.value}
        </span>
      </Copy>
    </div>
  )
}
