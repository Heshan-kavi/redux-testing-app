import './App.css';
import Backdrop from './components/Backdrop';
import Modal from './components/Modal';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>To Do List</h1>
      <Todo text="Take a cup"/>
      <Todo text="Wash the cup"/>
      <Todo text="Add milk to the cup"/>
      <Modal/>
      <Backdrop/>
    </div>
  );
}

export default App;
