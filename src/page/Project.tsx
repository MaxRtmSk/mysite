import React from 'react'
import List from '../components/List'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IReact } from '../types/project'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 700px;
  margin: 0 auto;
`

const ContainerPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
`

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Link = styled.a`
  text-decoration: none;
  color: black;
  margin: 12px 0;

  &:hover{
    color: grey;
  }
`


export default function Project() {
  const { react, reactNative, node } = useTypedSelector(state => state.project)

  return (
    <Container>
      <ContainerPage>
        <ListWrapper>
          <h2>React</h2>
          <List
            items={react}
            renderItem={
              (project: IReact) => <Link key={project.id} href={project.gitHub} target={'_blank'
              }>{project.title}</Link>
            }
          />
        </ListWrapper>
        <ListWrapper>
          <h2>React Native</h2>
          <List
            items={reactNative}
            renderItem={
              (project: IReact) => <Link key={project.id} href={project.gitHub} target={'_blank'
              }>{project.title}</Link>
            }
          />
        </ListWrapper>
        <ListWrapper>
          <h2>Node</h2>
          <List
            items={node}
            renderItem={
              (project: IReact) => <Link key={project.id} href={project.gitHub} target={'_blank'
              }>{project.title}</Link>
            }
          />
        </ListWrapper>
      </ContainerPage>
    </Container>
  )
}
