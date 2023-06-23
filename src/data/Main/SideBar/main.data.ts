import type IList from '../../../interfaces/components/SideBar/IList'

// ___ $ Data ___
import { lastData } from './last.data'

const sideBarData: IList[] = [
  {
    title: 'Getting started',
    isOpen: true,
    link: null,
    sublists: null,
    elements: [
      {
        endpoint: '/introduction',
        title: 'Introduction'
      }
    ]
  },
  {
    title: 'Releases',
    isOpen: false,
    link: null,
    elements: null,
    sublists: [
      {
        title: 'v1.0.5',
        isOpen: false,
        link: null,
        sublists: null,
        elements: [
          {
            endpoint: '/releases/v1.0.5/class',
            title: 'Class'
          },
          {
            endpoint: '/releases/v1.0.5/modules',
            title: 'Modules'
          }
        ]
      }
    ]
  },
  ...lastData
]

export default sideBarData
