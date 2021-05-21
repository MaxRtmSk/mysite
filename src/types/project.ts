export interface IReact {
  id: string,
  title: string,
  gitHub: string,
}

export interface IReactNative {
  id: string,
  title: string,
  gitHub: string,
}

export interface INode {
  id: string,
  title: string,
  gitHub: string,
}

export interface ProjectState {
  react: IReact[],
  reactNative: IReactNative[],
  node: INode[]
}

// export enum projectActionTypes {

// }

// export interface getProject {

// }