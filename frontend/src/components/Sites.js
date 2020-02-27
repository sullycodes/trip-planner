import React from 'react';
import Site from '../components/Site'

const Sites = (props) => {
  // console.log(props)
  const sitesForThisTrip = props.sites.filter(s => s.trip_id == props.tripId) 

  return (
    <div className="sites-list">
       {sitesForThisTrip.map(s => <Site {...s}  deleteSite={props.deleteSite}/> )} 
    </div>
  );
}

export default Sites
