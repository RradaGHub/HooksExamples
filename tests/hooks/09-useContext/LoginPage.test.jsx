const { screen, render, fireEvent } = require("@testing-library/react");
const {
  UserContext,
} = require("../../../src/09-useContext/context/UserContext");
const { default: LoginPage } = require("../../../src/09-useContext/LoginPage");

describe("Pruebas en <LoginPage></LoginPage>", () => {
  test("should mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("should llamar el setUser cuando se hace click en el boton", () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalledWith({
      id: 123,
      name: "Juan",
      email: "Juan@gmail.com",
    });
  });
});
