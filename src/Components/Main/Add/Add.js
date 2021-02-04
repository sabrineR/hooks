import React,{useState} from 'react'
import {Button } from "react-bootstrap";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
Modal.setAppElement("#root");
const Add = ({AddFilm}) => {
  let subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
//les states
const[title,setTitle]=useState('');
const[rate,setRate]=useState('');
const[description,setDescription]=useState('');
const[posterUrl,setPosterUrl]=useState('');

  return (
    <div>
      <Button variant="danger" onClick={openModal}>Add New Movie</Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        
      
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add Movie</h2>
      
        <form>
           <label>Movie Name</label><br/>
          <input type="text" onChange={e=>setTitle(e.target.value)} /><br/>
          <label>Movie Rate</label><br/>
          <input type="text" onChange={e=>setRate(e.target.value)}/><br/>
          <label>Movie description</label><br/>
          <input type="text" onChange={e=>setDescription(e.target.value)}/><br/>
          <label>Movie posterUrl</label><br/>
          <input type="text" onChange={e=>setPosterUrl(e.target.value)}/><br/>
          <br/>
          <button onClick={()=>{
          AddFilm({
            title:title,
            description:description,
            posterUrl:posterUrl,
            rate:rate
            })
            closeModal()
            }}>ok</button>
          <button>cancel</button>
          <button onClick={closeModal}>close</button>
        </form>
      </Modal>
    </div>
      );
}

export default Add;
