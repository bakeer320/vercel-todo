import React, { useState } from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

const App = () => {
  const [refreshList, setRefreshList] = useState(false);

  const handleTodoAdded = () => {
    setRefreshList(!refreshList);
  };

  return (
    <div className="container">
      <InputTodo onTodoAdded={handleTodoAdded} />
      <ListTodos key={refreshList} />
    </div>
  );
};

export default App;
