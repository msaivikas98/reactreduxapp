import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAIL} from '../actions/actionTypes'

const initialState={
    users:[],
    error:'',
    isLoading:false
}

const usersReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {...state,isLoading:true}
        case FETCH_USERS_SUCCESS:
            return {users:action.data,isLoading:false,error:''}
        case FETCH_USERS_FAIL:
            return {users:[],isLoading:true,error:action.data} 
        default:
            return state;           
    }
}

export default usersReducer