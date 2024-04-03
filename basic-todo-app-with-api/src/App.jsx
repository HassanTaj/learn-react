import logo from './logo.svg';
import './App.css';
import TodoComponent from './components/Todos/TodoComponent';


function App() {
  return (
    <>
      <div class="container-fluid bg-dark vh-100">
        <div className="row p-5">
          <TodoComponent/>
        </div>
      </div>
    </>
  );
}

export default App;
