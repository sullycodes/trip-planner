import React from 'react';
import Trip from '../components/Trip'

const Trips = (props) => {

  return (
    <div>
       {props.trips.map(t => <Trip {...t} deleteTrip={props.deleteTrip}/>)} 
       {/* includes props sites */}
    </div>
  );
}

export default Trips
