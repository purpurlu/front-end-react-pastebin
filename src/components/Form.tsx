import React, {useState} from "react";
import axios from "axios";

interface RefreshProps {
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  }

function Form({ setRefresh }: RefreshProps
    ): JSX.Element {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

  const api_url = process.env.REACT_APP_API_BASE;
  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
   if (body === "") {
    alert("THE BODY CANNOT BE EMPTY")
    return 
   }
    try {
      const pasteData = { title, body };
      const response = await axios.post(`${api_url}pastes/`, pasteData);
      setRefresh((previous)=>!previous)
      console.log(response);
    } catch (err) {
      console.error(err);
    }
    setTitle("")
    setBody("")
  };
  return (
    <div className="text-center">
      <h3> CREATE A NEW PASTE</h3>
      <form onSubmit={onSubmitForm}>
        <input
          className="form-control"
          type="text"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
          placeholder="paste title"
        />
        <textarea
          className="form-control"
          rows={10}
          value={body}
          onChange={(e)=> setBody(e.target.value)}
          placeholder="paste body"
        ></textarea>
        <button className="btn btn-success" style={{ width: "100%" }}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
