import { useState } from "react";
import "./App.css";

function App() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["テキスト"]);
  const [completeTodos, setCompleteTodos] = useState(["テキスト"]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");

    // alert(todoText);
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    // alert("削除");
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      {/* 入力欄 */}
      <div className="App">
        <div className="input-area">
          <input
            type="text"
            placeholder="todoを入力"
            value={todoText}
            onChange={onChangeTodoText}
          />
          <button onClick={onClickAdd}>追加</button>
        </div>

        {/* 未完了欄 */}
        <div className="incomplete-area">
          <p className="title">未完了</p>
          <ul>
            {incompleteTodos.map((todo, index) => {
              return (
                <li key={todo}>
                  <div className="list-row">
                    <p>{todo}</p>
                    <button onClick={() => onClickComplete(index)}>完了</button>
                    <button onClick={() => onClickDelete(index)}>削除</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 完了欄 */}
        <div className="complete-area">
          <p className="title">完了</p>
          <ul>
            {completeTodos.map((todo, index) => {
              return (
                <li key={todo}>
                  <div className="list-row">
                    <p>{todo}</p>
                    <button onClick={() => onClickBack(index)}>戻す</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
