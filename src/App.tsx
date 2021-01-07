import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { H1, P, FOOTER, LI } from "./styles";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <H1>Jesse Lucas</H1>
        <P>
          Hello My name is Jesse Lucas. I am currently an intern at Climate
          Clever and I had to change the title and add a bio about myself. I am
          24 years old and i love programming!
        </P>
      </header>
      <FOOTER>
        <ul>
          <LI>https://github.com/Jesse-Lucas1996</LI>
          <LI>https://www.linkedin.com/in/jesse-lucas-56b0b9163/</LI>
        </ul>
      </FOOTER>
    </div>
  );
}

export default App;
