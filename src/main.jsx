import React from "react";
import ReactDOM from "react-dom/client";
import CounterApp from "./01-useState/CounterApp";
import CounterWithCustomHook from "./01-useState/CounterWithCustomHook";
import FormWithCustomHook from "./02-useEffect/FormWithCustomHook";
import SimpleForm from "./02-useEffect/SimpleForm";
import MultipleCustomHooks from "./03-examples/MultipleCustomHooks";
import FocusScreen from "./04-useRef/FocusScreen";
import CallBackHook from "./06-memos/CallBackHook";
import MemoHook from "./06-memos/MemoHook";
import Memorize from "./06-memos/MemoHook";
import { Padre } from "./07-tarea-memo/Padre";
// import HooksApp from "./HooksApp";
import "./index.css";
// import "./08-useReducer/intro-reducer";
import TodoApp from "./08-useReducer/TodoApp";
import MainApp from "./09-useContext/MainApp";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TodoAdd from "./08-useReducer/TodoAdd";

ReactDOM.createRoot(document.getElementById("root")).render(
  //   // <SimpleForm />
  //   // <FormWithCustomHook />
  //   // <MultipleCustomHooks />
  // <FocusScreen />
  //   // <Memorize />
  //   // <MemoHook />
  //   // <CallBackHook />
  //   <Padre />
  // <TodoApp />

  <BrowserRouter>
    {/* <React.StrictMode> */}
    {/* <FocusScreen /> */}
    <TodoAdd />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
