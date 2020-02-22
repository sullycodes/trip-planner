export const addSite = (site) => {
    return (dispatch) => { 
        fetch(`http://localhost:3000/api/sites`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify(site)
        })
        .then( response => response.json())
        .then( site => { dispatch( { type: 'ADD_SITE', site }) })
    }
}
