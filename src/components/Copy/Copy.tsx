// ___ $ @preact ___
import type h from 'preact'

// ___ $ Interfaces ___
import type ICopy from '@interfaces/components/Copy/ICopy'

// ___ $ Components ___
import CopyToClipboard from '@utilities/components/CopyToClipboard/CopyToClipboard'

export default function Copy({ text, children }: ICopy): h.JSX.Element {
  return <CopyToClipboard text={text}>{children}</CopyToClipboard>
}
