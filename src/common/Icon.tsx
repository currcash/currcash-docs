// ___ $ @preact ___
import type h from 'preact'

// ___ $ Interfaces ___
import type IIcon from '@interfaces/common/IIcon'

export default function Icon({
  name,
  className,
  id,
  title
}: IIcon): h.JSX.Element {
  return (
    <>
      {/* Name */}
      {name && !className && !id && (
        <img
          src={`/svg/icons/${name}.svg`}
          title={title ?? 'icon'}
          draggable={false}
        />
      )}
      {/* Name & ClassName */}
      {name && className && !id && (
        <img
          src={`/svg/icons/${name}.svg`}
          class={`icon ${className}`}
          title={title ?? 'icon'}
          draggable={false}
        />
      )}
      {/* Name, ClassName & Id */}
      {name && className && id && (
        <img
          src={`/svg/icons/${name}.svg`}
          class={`icon ${className}`}
          id={id}
          title={title ?? 'icon'}
          draggable={false}
        />
      )}
      {/* Name & Id */}
      {name && !className && id && (
        <img
          src={`/svg/icons/${name}.svg`}
          id={id}
          title={title ?? 'icon'}
          draggable={false}
        />
      )}
    </>
  )
}
