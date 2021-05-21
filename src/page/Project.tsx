import React from 'react'
import List from '../components/List'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IReact } from '../types/project'

export default function Project() {
  const { react, reactNative, node } = useTypedSelector(state => state.project)

  return (
    <div>
      <div>
        <h2>React</h2>
        <List
          items={react}
          renderItem={
            (project: IReact) => <a key={project.id} href={project.gitHub}>{project.title}</a>
          }
        />
      </div>
      <div>
        <h2>React Native</h2>
        <List
          items={reactNative}
          renderItem={
            (project: IReact) => <a key={project.id} href={project.gitHub}>{project.title}</a>
          }
        />
      </div>
      <div>
        <h2>Node</h2>
        <List
          items={node}
          renderItem={
            (project: IReact) => <a key={project.id} href={project.gitHub}>{project.title}</a>
          }
        />
      </div>
    </div>
  )
}
