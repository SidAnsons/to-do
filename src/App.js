import './App.css';
import image from './todo.png';
import imageTwo from './happ.jpg';
import { TodoList } from './TodoList';

function App() {
  return (
    <div className="todo">
      <div className='container'>
        <img className='mainpic' src={image} alt="shop" width="70%"/>
      </div>
      <div className='container'>
        <h2>list</h2>
      </div>
      <TodoList/>
      <div className='container'>
        <img className='mainpic2' src={imageTwo} alt="man" width="70%"/>
      </div>
    </div>
  );
}

export default App;