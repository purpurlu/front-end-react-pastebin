import React, {useState, useEffect} from "react";
import { Card } from "react-bootstrap";
import "../style.css";

interface Paste {
  paste_id: number;
  title: string;
  body: string;
}

export default function MyCard(props: Paste): JSX.Element {
    const shortPaste = props.body.split("\n").splice(0, 5).join("\n")
    const [revealedPaste, setRevealedPaste] = useState("");

    function revealPaste() {
        if (props.body.length === revealedPaste.length) {
            setRevealedPaste(shortPaste)
        }
        else {
            setRevealedPaste(props.body)
        }
    }

    useEffect(() => {
        setRevealedPaste(shortPaste)
    }, [props.body, shortPaste])

  return (
    <Card style={{ width: "40rem", margin: "10px" }}>
      <Card.Title>{props.title}</Card.Title>
      <Card.Body>
        <code> {revealedPaste} </code>
      </Card.Body>
      <button onClick={revealPaste} className="dots">...</button>
    </Card>
  );
}
