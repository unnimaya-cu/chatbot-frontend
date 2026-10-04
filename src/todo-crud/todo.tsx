import { useState } from "react";

function Todo() {
  const [text, setText] = useState("");
  const [allTodoList, setAllTodoList] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (editingId) {
      setAllTodoList(
        allTodoList.map((item) =>
          item.id === editingId ? { ...allTodoList, text } : item,
        ),
      );
      setEditingId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text,
      };
      setAllTodoList([...allTodoList, newTodo]);
      setText("");
    }
  };

  const handleEditTodo = (item) => {
    setText(item.text);
    setEditingId(item.id);
  };

  const handleDeleteTodo = (todo) => {
    setAllTodoList(allTodoList.filter((item) => item?.id !== todo.id));
  };
  return (
    <div className="todo-heading">
      <div className="">
        <h2>Hello Todo App</h2>
      </div>

      <div className="todo-input">
        <input
          className="todo-padding"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="todo-button" onClick={handleAddTodo}>Add</button>
  </div>
        <table className="tb-border">
          <thead>
            <tr>
              <th>SL:NO</th>
              <th>TODO NAME</th>
              <th>STATUS</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {allTodoList &&
              allTodoList.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1} </td>
                    <td>{item?.text} </td>
                    <td>
                      <button
                        onClick={() => {
                          handleEditTodo(item);
                        }}
                      >
                        {" "}
                        Edit
                      </button>{" "}
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          handleDeleteTodo(item);
                        }}
                      >
                        Delete
                      </button>{" "}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
    
    </div>
  );
}
export default Todo;
