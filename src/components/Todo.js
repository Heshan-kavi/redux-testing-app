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
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deletehandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal onCancelClick={cancelhandler}/>}
            {modalIsOpen && <Backdrop onCancelClick={cancelhandler}/>}
        </div>
    );
}

export default Todo;