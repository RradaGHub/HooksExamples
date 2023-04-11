import { todoReducer } from "../../../src/08-useReducer/todoReducer";

describe('Pruebas en el todoReducer', () => {


    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }]

    test('should regresar el estado inicial', () => {

        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState)



    });

    test('should agregar un todo', () => {

        const action = {
            type: 'ADD_TODO',
            payload: {
                id: 2,
                description: 'Nuevo todo 2',
                done: false,
            }
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });
    test('should eliminar un todo', () => {

        const action = {
            type: 'REMOVE_TODO',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
        // expect(newState).toContain(action.payload);
    });
    test('should hacer un Toggle del todo', () => {

        const action = {
            type: 'TOGGLE_TODO',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);
        // expect(newState).toContain(action.payload);
    });



});
