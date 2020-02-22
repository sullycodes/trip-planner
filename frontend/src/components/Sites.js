import React from 'react';
import Site from '../components/Site'

const Sites = (props) => {

  console.log('props sent to Sites...')
  console.log(props.sites)
  console.log('id sent...')
  console.log(props.tripId)
  const sitesForThisTrip = props.sites.filter(s => s.trip_id == props.tripId) 
  console.log('filtered sites for trip id..')
  console.log(sitesForThisTrip)

  return (
    <div>
       {sitesForThisTrip.map(s => <Site {...s} />)} 
       {/* deleteSite={props.deleteSite} */}
       <p></p>
      <p>------------------- start of new trip -------------------</p>

    </div>
  );
}

export default Sites
