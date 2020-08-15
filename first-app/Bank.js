//import the createStore() function from the redux library

const { createStore } = require('redux');


//create an initialState state object

const initialState = {
    bal: 5000
};

// create a reducer

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'WITHDRAW':
            return {
                ...state,
                bal: state.bal - action.value
            }
            break;
        case 'DEPOSIT':
            return {
                ...state,
                bal: state.bal + action.value
            }
            break;
    }
    return state;

};

//call the store 

const store = createStore(reducer);


//subscribe the state 

store.subscribe(() => {
    console.log(store.getState());
})

//dispatch (sending the req)
store.dispatch({ type: "WITHDRAW", value: 1000 });
store.dispatch({ type: "DEPOSIT", value: 5000 });
store.dispatch({ type: "WITHDRAW", value: 2000 });
store.dispatch({ type: "DEPOSIT", value: 10000 });