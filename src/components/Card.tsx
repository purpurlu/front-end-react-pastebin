import React from 'react';
import { Card } from 'react-bootstrap';

interface Paste {
    paste_id: number,
    title: string,
    body: string
}

export default function MyCard(props: Paste): JSX.Element {
    return (
        <Card>
            <Card.Body>
                {props.body}
            </Card.Body>
        </Card>
    )
}