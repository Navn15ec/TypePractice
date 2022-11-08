import CakeView from './features/Cake/CakeView';
import './App.css';
import TodoView from './features/Todo/TodoView';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <CakeView />
      <TodoView />
    </div>
  );
}

export default App;
