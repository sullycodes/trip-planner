export const deleteSite = (id) => {
    return (dispatch) => { 
        return fetch(`http://localhost:3000/api/sites/${id}`, {
            method: 'DELETE',
        })
        .then( response => response.json()) // sends back deleted site id
        .then ( id => dispatch({ type: 'DELETE_SITE', id })) // sends to reducer and filters out old site from state using the id
    }
}

