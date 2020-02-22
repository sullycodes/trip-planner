import React from 'react';
import SitesContainer from '../containers/SitesContainer'


const Trip = (props) => {
    return (
        <div>           
             <li>{props.name} <button onClick={() => props.deleteTrip(props.id)}>DELETE</button></li>
             <SitesContainer tripId={props.id} />
        </div>
    )
}

export default Trip