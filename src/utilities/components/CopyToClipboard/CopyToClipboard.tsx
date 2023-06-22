// ___ $ @preact ___
import type h from 'preact'

// ___ $ Interfaces ___
import type ICopy from '@interfaces/components/Copy/ICopy'

// ___ $ Utilities ___
import { handleCopy } from '@utilities/funcs/handleCopy'

// ___ $ Styles ___
import './CopyToClipboard.css'

export default function CopyToClipboard({
  text,
  children
}: ICopy): h.JSX.Element {
  return (
    <span
      className='copy_to_clipboard'
      title='Copy to clipboard'
      onClick={() => {
        handleCopy(text)
        alert('Text Copied!')
      }}
    >
      {children}
    </span>
  )
}
