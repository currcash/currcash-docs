import type IList from '@interfaces/components/SideBar/IList'

// ___ $ Data ___
import { lastData } from '@data/Main/SideBar/last.data'

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
    title: 'Class',
    isOpen: true,
    link: null,
    sublists: null,
    elements: [
      {
        endpoint: '#Class',
        title: 'Class'
      },
      {
        endpoint: '#Currcash',
        title: 'Currcash'
      },
      {
        endpoint: '#CurrcashError',
        title: 'CurrcashError'
      },
      {
        endpoint: '#AboutProperties',
        title: 'About Properties'
      },
      {
        endpoint: '#AboutMethods',
        title: 'About Methods'
      },
      // Getters
      {
        endpoint: '#Currcash.GetValue',
        title: 'GetValue'
      },
      {
        endpoint: '#Currcash.GetPrecision',
        title: 'GetPrecision'
      },
      {
        endpoint: '#Currcash.GetSeparators',
        title: 'GetSeparators'
      },
      // Setters
      {
        endpoint: '#Currcash.SetValue',
        title: 'SetValue'
      },
      {
        endpoint: '#Currcash.SetPrecision',
        title: 'SetPrecision'
      },
      {
        endpoint: '#Currcash.SetSeparators',
        title: 'SetSeparators'
      },
      // Methods
      {
        endpoint: '#Currcash.Val',
        title: 'Val'
      },
      {
        endpoint: '#Currcash.Add',
        title: 'Add'
      },
      {
        endpoint: '#Currcash.Sub',
        title: 'Sub'
      },
      {
        endpoint: '#Currcash.Multiply',
        title: 'Multiply'
      },
      {
        endpoint: '#Currcash.DivideBy',
        title: 'DivideBy'
      },
      {
        endpoint: '#Currcash.isInteger',
        title: 'isInteger'
      },
      {
        endpoint: '#Currcash.isDecimal',
        title: 'isDecimal'
      },
      {
        endpoint: '#static.Currcash.isInteger',
        title: 'static isInteger'
      },
      {
        endpoint: '#static.Currcash.isDecimal',
        title: 'static isDecimal'
      }
    ]
  },
  ...lastData
]

export default sideBarData
