function Modal (props){
    return (
        <div className="modal">
            <p>{props.text}, Are you sure?</p>
            <button className="btn btn--alt" onClick={props.onCancelClick}>cancel</button>
            <button className="btn" onClick={props.onConfirmClick}>confirm</button>
        </div>
    )
}

export default Modal;