// Components 
import List from '../components/List'
import ListItem from '../components/ListItem/ListItem'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IReact } from '../types/project'
// Styles
import styled from 'styled-components'

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;

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
              (project: IReact) => (
                <ListItem
                  key={project.id}
                  href={project.gitHub}
                  language={project.language}
                >
                  {project.title}
                </ListItem>)
            }
          />
        </ListWrapper>
        <ListWrapper>
          <h2>React Native</h2>
          <List
            items={reactNative}
            renderItem={
              (project: IReact) => (
                <ListItem
                  key={project.id}
                  href={project.gitHub}
                  language={project.language}
                >
                  {project.title}
                </ListItem>)
            }
          />
        </ListWrapper>
        <ListWrapper>
          <h2>Node</h2>
          <List
            items={node}
            renderItem={
              (project: IReact) => (
                <ListItem
                  key={project.id}
                  href={project.gitHub}
                  language={project.language}
                >
                  {project.title}
                </ListItem>)
            }
          />
        </ListWrapper>
      </ContainerPage>
    </Container>
  )
}
