import React from 'react';
import { Link } from 'react-router-dom'

const Trips = (props) => {
  // console.log(props)
  return (
    <>
     {props.trips.map( t => <Link className="trip-list" to={`/trips/${t.id}`} >{t.name}</Link>)}
     </>
  );
}

export default Trips
