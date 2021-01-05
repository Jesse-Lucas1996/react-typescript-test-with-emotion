import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import { createEmotionProps } from './@emotion/react/dist/emotion-element-3a01c80e.cjs.prod';
const H1 = styled.h1(
  {
    fontSize: 60
  },
  props => ({ color: props.color })
)

const P = styled.p(
  {
    fontSize: 35
  },
  props => ({color: props.color})
)


function App() {
  return (    
    <div className="App">      
      <header className="App-header">
      <H1 color="lightgreen">Jesse Lucas</H1>       
        <P color="Red">Hello My name is Jesse Lucas. I am currently an intern at Climate Clever and I had to change the title and add a bio about myself.
          I am 24 years old and i love programming!</P>      
      
      </header>
    </div>
  );
}

export default App;
