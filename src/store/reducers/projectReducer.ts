import { ProjectState } from "../../types/project"

const initialState: ProjectState = {
  react: [
    {
      id: '7',
      title: 'Shopping Cart',
      language: 'typescript',
      gitHub: 'https://github.com/ratomsky/react-ts-shopping-cart',
    },
    {
      id: '6',
      title: 'Online Store',
      language: 'javascript',
      gitHub: 'https://github.com/ratomsky/onlineStore',
    },
    {
      id: '5',
      title: 'ToDo List',
      language: 'typescript',
      gitHub: 'https://github.com/ratomsky/react-redux-ts-todo-app'
    },
    {
      id: '4',
      title: 'Lang App',
      language: 'javascript',
      gitHub: 'https://github.com/ratomsky/rslang'
    },
    {
      id: '3',
      title: 'Travel App',
      language: 'javascript',
      gitHub: 'https://github.com/ratomsky/travel-app'
    },
    {
      id: '2',
      title: 'Blog',
      language: 'javascript',
      gitHub: 'https://github.com/ratomsky/react-redux-blog-app'
    },
    {
      id: '1',
      title: 'Memory Game',
      language: 'typescript',
      gitHub: 'https://github.com/ratomsky/react-game'
    }, 
  ],
  reactNative: [
    {
      id: '1',
      title: 'Weather App',
      language: 'typescript',
      gitHub: 'https://github.com/ratomsky/react-native-ts-weather-app'
    },
  ],
  node: [
    {
      id: '2',
      title: 'Online Store',
      language: 'javascript',
      gitHub: 'https://github.com/ratomsky/onlineStore',
    },
    {
      id: '1',
      title: 'Caesar Cipher CLI',
      language: 'javascript',
      gitHub: 'https://github.com/ratomsky/nodejs-caesar-cipher',
    },
  ]
}

export const projectReducer = (store = initialState, action:any) =>{
  switch (action.type) {
    default:
      return initialState
  }
}