import React, { useState } from "react";
import './style.css'; 
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [isExpanded, setIsExpanded]= useState(false); 
  const [note, setNote] = useState({
    title: "",
    content: ""
  });


  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title:"", 
      content:""
    });
    event.preventDefault();
  }

  const expand =()=>{
 setIsExpanded(true); 
  }
  

  return (
    <div>
      <form className="create-note">
      {isExpanded &&
         <input
          name="title"
          onChange={handleChange}
          value={note.title}
          style = {{textColor: (props.displayMessage ? "red" : "black") }}
          placeholder={props.displayMessage ? "**Your must insert a title***" : "Title"}
        />
        }
        <textarea
         onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          row={isExpanded ? "3" : "1"}
        />
        
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
        <AddIcon/>
        </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
