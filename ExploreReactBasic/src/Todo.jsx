// const Todo = ({ task, isDone }) => {
//   return (
//     <div>
//       <li>{task}</li>
//     </div>
//   );
// };

// export default Todo;

const Todo = ({ task, isDone }) => {
  return <>{isDone ? <li>Done: {task}</li> : <li>Pending: {task}</li>}</>;
};

export default Todo;
