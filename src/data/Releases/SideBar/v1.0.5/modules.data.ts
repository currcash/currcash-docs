import type IList from '@interfaces/components/SideBar/IList'

// ___ $ Data ___
import { lastData } from '@data/Main/SideBar/last.data'

const sideBarData: IList[] = [
  {
    title: 'Getting started',
    isOpen: false,
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
    isOpen: true,
    link: null,
    elements: null,
    sublists: [
      {
        title: 'v1.0.5',
        isOpen: true,
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
  {
    title: 'Modules',
    isOpen: true,
    link: null,
    sublists: null,
    elements: [
      {
        endpoint: '#Modules',
        title: 'Modules'
      },
      {
        endpoint: '#Add',
        title: 'Add()'
      },
      {
        endpoint: '#Sub',
        title: 'Sub()'
      },
      {
        endpoint: '#Multiply',
        title: 'Multiply()'
      },
      {
        endpoint: '#Divide',
        title: 'Divide()'
      },
      {
        endpoint: '#isInteger',
        title: 'isInteger()'
      },
      {
        endpoint: '#isDecimal',
        title: 'isDecimal()'
      }
    ]
  },
  ...lastData
]

export default sideBarData
