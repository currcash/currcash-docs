import type IElement from './IElement'
import type ILink from './ILink'

interface IList {
  title: string
  isOpen: boolean
  link?: ILink | null
  elements: IElement[] | null
  sublists: IList[] | null
}

export default IList
