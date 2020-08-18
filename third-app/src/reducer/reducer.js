const initialState = {
    bal: 5000
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DEPOSIT':
            return {
                ...state,
                bal: state.bal + action.value
            }
            break;
        case 'WITHDRAW':
            return {
                ...state,
                bal: state.bal - action.value
            }
    }
    return state;
};

export default reducer;