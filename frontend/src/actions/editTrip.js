export const editTrip = (id) => {
    return (dispatch) => { 
        return fetch(`http://localhost:3000/api/trips/${id}`, {
            method: 'PATCH',
        })
        .then( response => response.json()) // sends back updated object
        .then ( trip => dispatch({ type: 'EDIT_TRIP', trip })) 
        // sends to object reducer and maps through existing trips array and 
        // using the trip overwrites the old trip or copies trips with diff ids
        // then it overwrites trips with the new trips array that was mapped
    }
}

