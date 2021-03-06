import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTrips } from '../actions/fetchTrips'
import { fetchSites } from '../actions/fetchSites'
import { addTrip } from '../actions/addTrip'
import { editTrip } from '../actions/editTrip'
import { deleteTrip } from '../actions/deleteTrip'
import { editSite } from '../actions/editSite'
import { Route, Switch } from 'react-router-dom'
import Trip from '../components/Trip'
import Trips from '../components/Trips'
import TripInput from '../components/TripInput'
import TripEdit from '../components/TripEdit'
import SiteEdit from '../components/SiteEdit'



class TripsContainer extends Component {

    componentDidMount() {
        this.props.fetchTrips()
        this.props.fetchSites()
      }
      
    render() {
        return (
            <div className="trip-container">
                <Switch >
                    <Route exact path="/trips/new" render={ () => <TripInput {...this.props}/> } />
                    <Route path='/trips/:id/edit' render={routerProps => <TripEdit {...routerProps} {...this.props}  /> } />
                    <Route path='/trips/:id' render={routerProps => <Trip {...routerProps} {...this.props}  /> } />
                    <Route path='/trips' render={routerProps => <Trips {...routerProps} {...this.props} />} />
                    <Route path='/sites/:id' render={routerProps => <SiteEdit {...routerProps} {...this.props} sites={this.props.sites}/> } />
                </Switch>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        trips: state.trips,
        sites: state.sites    
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchTrips: () => dispatch(fetchTrips()),
      addTrip: trip => dispatch(addTrip(trip)),
      editTrip: editedTrip => dispatch(editTrip(editedTrip)),
      deleteTrip: id => dispatch(deleteTrip(id)),
      fetchSites: () => dispatch(fetchSites()),
      editSite: editedSite => dispatch(editSite(editedSite))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(TripsContainer)