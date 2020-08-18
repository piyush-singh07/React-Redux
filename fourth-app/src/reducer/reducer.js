const initialState=
{
    age:20
};

const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case 'UP':return {
            ...state,
            age:state.age+10
        }
        break;
        case 'DOWN':
                return{
                    ...state,
                    age:state.age-1
                }
                break;
    }
    return state;
}

export default reducer;