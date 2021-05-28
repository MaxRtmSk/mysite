import React from 'react';
import Project from './page/Project';

export default function App() {

  return (
    <div style={{
      height: '800px',
      display: `flex`,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      fontFamily: 'Arial, Helvetica, sans-serif'
    }}>
      <h1 style={{ textAlign: `center`, margin: '0', }}>My Project List</h1>
      <p style={{ textAlign: `center`, fontSize: '20px' }}>
        У всех проектов есть хорошая, написанная мной документация)
      </p>
      <Project />
    </div >
  )

}