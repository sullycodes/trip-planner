export const editSite = (editedSite) => {
    return (dispatch) => { 
        return fetch(`http://localhost:3000/api/sites/${editedSite.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(editedSite)
        })
        .then( response => response.json()) 
        .then ( editedSite => dispatch({ type: 'EDIT_SITE', editedSite })) 
    }
}

