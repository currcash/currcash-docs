import type IList from '../../../interfaces/components/SideBar/IList'

export const lastData: IList[] = [
  {
    title: 'Contributors',
    link: {
      endpoint: '/contributors',
      target: '_self'
    },
    isOpen: false,
    sublists: null,
    elements: null
  },
  {
    title: 'GitHub Repository',
    link: {
      endpoint: 'https://github.com/currcash/currcash/',
      target: '_blank'
    },
    isOpen: false,
    sublists: null,
    elements: null
  }
]
