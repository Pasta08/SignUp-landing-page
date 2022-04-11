import "./App.css";
import Form from "./Components/Form";
import Title from "./Components/Title";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <Title />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
