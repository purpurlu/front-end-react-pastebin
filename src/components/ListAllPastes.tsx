import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style.css";
import MyCard from "./Card";
import { Row } from "react-bootstrap";

interface Paste {
  paste_id: number;
  title: string;
  body: string;
}

interface RefreshProps {
    refresh: boolean
}

function ListAllPastes({refresh} : RefreshProps): JSX.Element {
  const [pastes, setPastes] = useState<Paste[]>([]);

  useEffect(() => {
    const api_url = process.env.REACT_APP_API_BASE;
    const getAllPastes = async () => {
      console.log(api_url);
      const response = await axios.get(`${api_url}pastes/`);
      if (response.status === 200) {
        setPastes(response.data);
        console.log(response);
      }
    };
    getAllPastes();
  }, [refresh]);

  return (
    <div className="text-center">
      <Row>
        {pastes.map((paste, index) => {
          return (
            <MyCard
              title={paste.title}
              paste_id={paste.paste_id}
              body={paste.body}
              key={index}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default ListAllPastes;
