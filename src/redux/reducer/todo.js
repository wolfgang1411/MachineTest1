import { DELETE_TODO , ADD_TODO} from '../action/actionType'

const initalState = {
    data:[],
}

export const todo = (state=initalState,action) => {
    const {payload , type} = action

    switch(type){
        case ADD_TODO:
            return{
                ...state,
                data:[payload,...state.data]
            }
        case DELETE_TODO:
            return{
                ...state,
                data:state.data.filter((item) => item.id !== payload)
            }
        default:
            return state
    }
}