export const fetchTrips = () => {
    return (dispatch) => { 
    fetch('http://localhost:3000/api/trips')
    .then( response => response.json())
    // .then ( data => console.log(data))
    .then( data => { dispatch( { type: 'FETCH_TRIPS', trips: data }) })
    }
}
