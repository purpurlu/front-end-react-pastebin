import React from "react";
import axios from 'axios';


interface FormElements extends HTMLFormControlsCollection {
    title: HTMLInputElement,
    body: HTMLInputElement
}

interface PasteBinInput extends HTMLFormElement {
    elements: FormElements
}

function Form(): JSX.Element {
    //const [paste, setPaste] = useState('')
    const api_url = process.env.REACT_APP_LOCAL ? process.env.REACT_APP_API_LOCAL : process.env.REACT_APP_API_HEROKU
    const onSubmitForm = async (e: React.FormEvent<PasteBinInput>) => {
            e.preventDefault();
            const title = e.currentTarget.elements.title.value;
            const body = e.currentTarget.elements.body.value;
            console.log(body, title);
            // const formObject = new FormData(e.target)
            try{
                const pasteData = {title, body}
                const response = await axios.post(`${api_url}pastes/`, pasteData)
                //window.location.href = "/"
                console.log(response)
                //console.log(response)
            }
            catch(err) {
                console.error(err)
            } 
    }
        return (
            <div className="text-center">
                <h3> CREATE A NEW PASTE</h3>
                <form onSubmit={onSubmitForm}> 
                    <input className="input" type="text" name="title" placeholder="paste title"
                    />
                    <textarea rows={10} name="body" placeholder="paste body">
                    </textarea>
                    <button className="mybutton">Add</button>
                </form>
            </div>
        )
}

export default Form;