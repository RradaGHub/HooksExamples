const { render, screen } = require("@testing-library/react");
const {
  UserContext,
} = require("../../../src/09-useContext/context/UserContext");
const { default: HomePage } = require("../../../src/09-useContext/HomePage");

describe("Pruebas en el HomePage", () => {
  const user = {
    id: 1,
    name: "Ruben",
  };
  test("should mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("should mostrar el componente con el usuario", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
  });
});
