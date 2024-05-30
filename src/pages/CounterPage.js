import Panel from "../components/Panel";
import Button from "../components/Button";
import { produce } from "immer";
import { useReducer } from "react";
import { type } from "@testing-library/user-event/dist/type";

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const INPUT_VALUE = 'valueToAdd';
const ADD_VALUE = 'addToCount';

// const reducer = (state, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             state.count++;
//             break;

//         case DECREMENT:
//             state.count--;
//             break;

//         case INPUT_VALUE:
//             state.inputValue = action.payload
//             break;

//         case ADD_VALUE:
//             state.count = state.count + state.inputValue;
//             state.inputValue = 0;
//             break;
//         default:
//             break;
//     }
// }

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:

            return {
                ...state,
                count: state.count + 1
            };


        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        case INPUT_VALUE:
            state.inputValue = action.payload
            return {
                ...state,
                inputValue: action.payload
            }

        case ADD_VALUE:

            return {
                ...state,
                count: state.count + state.inputValue,
                inputValue: 0
            }
        default:
            break;
    }
}




function CounterPage({ initialValue }) {

    const [state, dispatch] = useReducer(reducer, {
        count: initialValue,
        inputValue: 0
    });


    const Increment = () => dispatch({ type: INCREMENT });
    const decrement = () => dispatch({ type: DECREMENT });
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        dispatch({
            type: INPUT_VALUE,
            payload: value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: ADD_VALUE });
    }

    return (
        <Panel className='m-3'>
            <h1 className="text-lg">Counter Value: {state.count}</h1>
            <div className="flex">
                <Button onClick={Increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Value to add:</label>
                <input
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                    value={state.inputValue || ''}
                    onChange={handleChange}
                    type="number"
                />
                <Button>Add</Button>
            </form>
        </Panel>)

}

export default CounterPage;