import './App.css';
import Todos from './todos/todos';

function App() {
  /**
   * 
   * 
   */
  return (
    <div className="App bg-dark vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
           <Todos/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
