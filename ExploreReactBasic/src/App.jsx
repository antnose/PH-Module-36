import "./App.css";
import Todo from "./Todo";

function App() {
  return (
    <>
      <Todo task="Learn React" isDone={true} />
      <Todo task="Revise JS" isDone={false} />
      <Todo task="Take a shower" isDone={true} />
    </>
  );
}

export default App;
