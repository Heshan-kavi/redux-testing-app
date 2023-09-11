function Todo(props){
    return (
        <div className='card'>
            <h2 className='actions'>{props.text}</h2>
            <button className='btn'>delete</button>
        </div>
    );
}

export default Todo;