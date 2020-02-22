export const deleteTrip = (id) => {
    return (dispatch) => { 
        return fetch(`http://localhost:3000/api/trips/${id}`, {
            method: 'DELETE',
        })
        .then( response => response.json()) // sends back deleted trip id
        .then ( id => dispatch({ type: 'DELETE_TRIP', id })) // sends to reducer and filters out old trip from state using the id
    }
}

