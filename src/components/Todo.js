import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props){

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deletehandler(){
        setModalIsOpen(true);
    }

    function cancelhandler(){
        setModalIsOpen(false);
        alert("you have successfully canceled the to do item");
    }

    function confirmhandler(){
        setModalIsOpen(false);
        alert("your item is confirmed");
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deletehandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal text={props.text} onCancelClick={cancelhandler} onConfirmClick={confirmhandler}/>}
            {modalIsOpen && <Backdrop onCancelClick={cancelhandler}/>}
        </div>
    );
}

export default Todo;