export const addTrip = (trip) => {
    return (dispatch) => { 
        fetch('http://localhost:3000/api/trips', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify(trip)
        })
        .then( response => response.json())
        .then( trip => { dispatch( { type: 'ADD_TRIP', trip: trip }) })
    }
}