import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  // getting todo list
  const localTodoList = window.localStorage.getItem("todoList");
  // if todo list is not empty
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem("todoList", []);
  return [];
};

const initialValue = {
  filterStatus: "all",
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem("todoList");
      console.log(todoList);
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        console.log(todoListArr);
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        console.log(window.localStorage);
      } else {
        window.localStorage.setItem(
          "todoList",
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
      // console.log("add todo ");
    },
    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title;
            todo.status = action.payload.status;
          }
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        state.todoList = [...todoListArr];
      }
    },
    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        console.log("todoListArr :>> ", todoListArr);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todoListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
