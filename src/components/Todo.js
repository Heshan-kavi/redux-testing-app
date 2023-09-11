function Todo(props){

    function deletehandler(){
        console.log(props.text);
    }

    return (
        <div className='card'>
            <h2 className='actions'>{props.text}</h2>
            <button className='btn' onClick={deletehandler}>delete</button>
        </div>
    );
}

export default Todo;