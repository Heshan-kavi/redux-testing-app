function Modal (props){
    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={props.onCancelClick}>cancel</button>
            <button className="btn" onClick={props.onCancelClick}>confirm</button>
        </div>
    )
}

export default Modal;