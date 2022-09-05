import Form from "./components/Form";
import ListAllPastes from "./components/ListAllPastes";
import "./buttondots.css";
import { Container } from "react-bootstrap";

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
        <button className="dots">...</button>
      </div>
    </Container>
    
  )
}

export default App;
