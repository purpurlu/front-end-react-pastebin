import React from 'react';
import { Card } from 'react-bootstrap';

interface Paste {
    paste_id: number,
    title: string,
    body: string
}

export default function MyCard(props: Paste): JSX.Element {

    return (
        <Card style={{ width: '40rem', margin: '10px' }}>
            <Card.Title>
                {props.title}
            </Card.Title>
            <Card.Body>
                <code> {props.body} </code>
            </Card.Body>
            <button className="dots">...</button>
        </Card>
    )
}