const { render, screen } = require("@testing-library/react");
const { default: TodoApp } = require("../../../src/08-useReducer/TodoApp");
const { default: useTodos } = require("../../../src/hooks/useTodos");

jest.mock("../../../src/hooks/useTodos");

describe("Pruebas en TodoApp", () => {
  useTodos.mockReturnValue({
    todos: [
      { id: 1, description: "Todo 1", done: false },
      { id: 2, description: "Todo 2", done: true },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleNewTodo: jest.fn(),
  });
  test("should mostrar el componente correctamente", () => {
    render(<TodoApp />);
    // screen.debug()

    expect(screen.getByText("Todo 1")).toBeTruthy();
    expect(screen.getByText("Todo 2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
