//import createStore function from redux library

const { createStore } = require('redux');

// create an initial state

const initialState = {
    age: 60
};

//create a reducer 

const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'UP':
                return {
                    ...state,
                    age: state.age + 1
                }
                break;
            case 'DOWN':
                return {
                    ...state,
                    age: state.age - 2
                }
        }
        return state;
    }
    //call the store 

const store = createStore(reducer);

//subscribe the store

store.subscribe(() => {
    console.log(store.getState());
})

//dispatch 
store.dispatch({ type: 'UP' });
store.dispatch({ type: 'DOWN' });
store.dispatch({ type: 'DOWN' });
store.dispatch({ type: 'UP' });
store.dispatch({ type: 'DOWN' });