const INNITIAL_STATE = {
    currentUser:null
}

export const userReducer = (state = INNITIAL_STATE, action) =>{
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state, 
                currentUser: action.payload
            }
          default:
                return state;
    }

}