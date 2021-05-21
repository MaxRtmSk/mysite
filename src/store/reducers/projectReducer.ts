import { ProjectState } from "../../types/project"

const initialState: ProjectState = {
  react: [
    {
      id: '1',
      title: 'ToDo List',
      gitHub: ''
    },
    {
      id: '2',
      title: 'Lang App',
      gitHub: ''
    },
    {
      id: '3',
      title: 'Travel App',
      gitHub: ''
    },
    {
      id: '4',
      title: 'Memory Game',
      gitHub: ''
    }, 
  ],
  reactNative: [
    {
      id: '1',
      title: 'ToDo List',
      gitHub: ''
    },
    {
      id: '2',
      title: 'Lang App',
      gitHub: ''
    },
    {
      id: '3',
      title: 'Travel App',
      gitHub: ''
    },
    {
      id: '4',
      title: 'Memory Game',
      gitHub: ''
    },
  ],
  node: [
    {
      id: '1',
      title: 'ToDo List',
      gitHub: ''
    },
    {
      id: '2',
      title: 'Lang App',
      gitHub: ''
    },
    {
      id: '3',
      title: 'Travel App',
      gitHub: ''
    },
    {
      id: '4',
      title: 'Memory Game',
      gitHub: ''
    },
  ]
}

export const projectReducer = (store = initialState, action:any) =>{
  switch (action.type) {
    default:
      return initialState
  }
}