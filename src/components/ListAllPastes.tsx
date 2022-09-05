import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style.css"

interface Paste {
    paste_id: number,
    title: string,
    body: string
}

function ListAllPastes(): JSX.Element{
    const [pastes, setPastes] = useState<Paste[]>([])

    useEffect(()=> {
        const api_url = process.env.REACT_APP_LOCAL ? process.env.REACT_APP_API_LOCAL : process.env.REACT_APP_API_HEROKU
        const getAllPastes = async() => {
            console.log(api_url)
            const response = await axios.get(`${api_url}pastes/`)
            if (response.status===200) {
                setPastes(response.data)
                console.log(response)
            }
        }
        getAllPastes()
    }, [])

    return (
        <div className="text-center">
            <table>
                <thead> 
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                </thead>
                <tbody> 
                {pastes.map((paste, index) => {
                    return (
                        <tr key={index}> 
                            <td>{paste.title}</td>
                            <td>{paste.body}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default ListAllPastes;