import React from 'react';
import styled from 'styled-components'


const ListBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 10px;

  background-color: lightgrey;
`

interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {

  return (
    <ListBody>
      {props.items.map(props.renderItem)}
    </ListBody>
  )
}