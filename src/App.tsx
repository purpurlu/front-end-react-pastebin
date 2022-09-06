import Form from "./components/Form";
import ListAllPastes from "./components/ListAllPastes";
import "./buttondots.css";
import { Container } from "react-bootstrap";
import React, { useState} from 'react';

function App(): JSX.Element {

  return (
    <Container>
      <div className="text-center"> 
        <div className="text-center">
          <h1>NEHA'S AND LAURA'S PASTEBIN</h1>
        </div>
        <div className="text-center">
          <Form/>
        </div>
        <div className="text-center">
          <ListAllPastes/>
        </div>
      </div>
    </Container>
    
  )
}

export default App;
