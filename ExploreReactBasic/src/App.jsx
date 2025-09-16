import Actor from "./Actor";
import "./App.css";
import Singer from "./Singer";
import Todo from "./Todo";

function App() {
  const actors = [
    "Bappa Raj",
    "Omor Sunny",
    "Salman Shah",
    "Hero Alom",
    "Hero",
  ];

  const singers = [
    {
      id: 1,
      name: "Dr. Mahfuz",
      age: 56,
    },
    {
      id: 2,
      name: "Ariana Wells",
      age: 34,
    },
    {
      id: 3,
      name: "Samuel Knight",
      age: 45,
    },
    {
      id: 4,
      name: "Lina Gomez",
      age: 29,
    },
    {
      id: 5,
      name: "Rajiv Banerjee",
      age: 39,
    },
    {
      id: 6,
      name: "Emily Zhang",
      age: 27,
    },
    {
      id: 7,
      name: "Carlos Rivera",
      age: 41,
    },
    {
      id: 8,
      name: "Naomi Clarke",
      age: 36,
    },
    {
      id: 9,
      name: "Tariq Al-Fulan",
      age: 52,
    },
    {
      id: 10,
      name: "Yuki Nakamura",
      age: 31,
    },
  ];

  return (
    <>
      <h1>React Core Concepts</h1>
      {/* {actors.map((actor) => (
        <Actor actor={actor} />
      ))} */}

      {singers.map((singer) => (
        <Singer singer={singer} key={singer.id} />
      ))}
      {/* <Todo task="Learn React" isDone={true} />
      <Todo task="Revise JS" isDone={false} />
      <Todo task="Take a shower" isDone={true} /> */}
    </>
  );
}

export default App;
