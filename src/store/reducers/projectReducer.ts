import { ProjectState } from "../../types/project"

const initialState: ProjectState = {
  react: [
    {
      id: '6',
      title: 'Online Store',
      gitHub: 'https://github.com/ratomsky/onlineStore',
    },
    {
      id: '5',
      title: 'ToDo List',
      gitHub: 'https://github.com/ratomsky/react-redux-ts-todo-app'
    },
    {
      id: '4',
      title: 'Lang App',
      gitHub: 'https://github.com/ratomsky/rslang'
    },
    {
      id: '3',
      title: 'Travel App',
      gitHub: 'https://github.com/ratomsky/travel-app'
    },
    {
      id: '2',
      title: 'Blog',
      gitHub: 'https://github.com/ratomsky/react-redux-blog-app'
    },
    {
      id: '1',
      title: 'Memory Game',
      gitHub: 'https://github.com/ratomsky/react-game'
    }, 
  ],
  reactNative: [
    {
      id: '1',
      title: 'Weather App',
      gitHub: 'https://github.com/ratomsky/react-native-ts-weather-app'
    },
  ],
  node: [
    {
      id: '2',
      title: 'Online Store',
      gitHub: 'https://github.com/ratomsky/onlineStore',
    },
    {
      id: '1',
      title: 'Caesar Cipher CLI',
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