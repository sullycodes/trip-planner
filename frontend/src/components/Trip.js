import React, { Component } from 'react';
import SitesContainer from '../containers/SitesContainer'
import { Route } from 'react-router-dom'
import TripEdit from '../components/TripEdit'


const Trip = (props) => {
        
        const trip =  props.trips.find(t => t.id == props.match.params.id)
        // console.log(props)

        const handleDelete = () => {
            props.deleteTrip(trip.id)
            props.history.push('/trips')
        }

        const handleEdit = () => {
            props.history.push(`/trips/${trip.id}/edit`)
        }

        return (
            <div > 
                <h2 className="trip-title">{trip ? trip.name : null }<button onClick={() => handleEdit()}>EDIT</button><button onClick={() => handleDelete()}>DELETE</button></h2>
                <div className="trip-attribute">Start Date: {trip ? trip.date : null }</div>
                <div className="trip-attribute">Trip Length: {trip ? trip.length : null } days</div>
                <p>My Sites To See List</p>
                <SitesContainer tripId={trip ? trip.id : null } />
            </div>
        )
}

export default Trip
