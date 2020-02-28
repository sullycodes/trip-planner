export const editTrip = (editedTrip) => {
    return (dispatch) => { 
        return fetch(`http://localhost:3000/api/trips/${editedTrip.id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(editedTrip)
        })
        .then( response => response.json()) 
        .then ( editedTrip => dispatch({ type: 'EDIT_TRIP', editedTrip })) 
    }
}

