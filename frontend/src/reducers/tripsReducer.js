const tripsReducer = (state = { trips: [], sites: [] }, action ) => {
    switch(action.type) {
        // case 'LOADING_TRIPS':
        //     return {
        //         ...state,
        //         trips:[...state.trips],
        //         loading: true
        //     }
        case 'FETCH_TRIPS':
            return { ...state, trips: action.trips }
        case 'ADD_TRIP':
            return {...state, trips: [ ...state.trips, action.trip]}  
        case 'DELETE_TRIP':
            const trips = state.trips.filter(t => t.id !== action.id)
            return { ...state, trips: trips }
        case 'FETCH_SITES':        
                return { ...state, sites: action.sites}
        case 'ADD_SITE':
            return {...state, sites: [...state.sites, action.site ] }
        default:
            return state
    }
}

export default tripsReducer
