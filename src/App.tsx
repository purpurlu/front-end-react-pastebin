import Form from "./components/Form";
import ListAllPastes from "./components/ListAllPastes";
import { Container } from "react-bootstrap";
import React, { useState } from "react";

function App(): JSX.Element {
  const [refresh, setRefresh] = useState(false);
  return (
    <Container>
      <div className="text-center">
        <div className="text-center">
          <h1>NEHA'S AND LAURA'S PASTEBIN</h1>
        </div>
        <div className="text-center">
          <Form setRefresh={setRefresh} />
        </div>
        <div className="text-center">
          <ListAllPastes refresh={refresh} />
        </div>
      </div>
    </Container>
  );
}

export default App;
