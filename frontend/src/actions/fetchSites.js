export const fetchSites = () => {
    return (dispatch) => { 
    fetch('http://localhost:3000/api/sites')
    .then( response => response.json())
    // .then ( data => console.log(data))
    .then( sites => { dispatch( { type: 'FETCH_SITES',  sites: sites }) })
    }
}
