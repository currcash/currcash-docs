import type IList from '@interfaces/components/SideBar/IList'

interface ILayout {
  isSideBar: boolean
  release?: string
  data?: IList[]
}

export default ILayout
