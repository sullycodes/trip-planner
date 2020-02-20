const tripsReducer = (state = { trips: [] }, action ) => {
    switch(action.type) {
        // case 'LOADING_TRIPS':
        //     return {
        //         ...state,
        //         trips:[...state.trips],
        //         loading: true
        //     }
        case 'FETCH_TRIPS':
            return { trips: action.trips }
        case 'ADD_TRIP':
            return {...state, trips: [ ...state.trips, action.trip]           }       
        default:
            return state
    }
}

export default tripsReducer