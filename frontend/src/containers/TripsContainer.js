import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTrips } from '../actions/fetchTrips'
import { fetchSites } from '../actions/fetchSites'
import { addTrip } from '../actions/addTrip'
import { deleteTrip } from '../actions/deleteTrip'
import { Route, Switch } from 'react-router-dom'
import Trip from '../components/Trip'
import Trips from '../components/Trips'
import TripInput from '../components/TripInput'


class TripsContainer extends Component {

    componentDidMount() {
        this.props.fetchTrips()
        // this.props.fetchSites()
      }
      
    render() {
        return (
            <div className="trip-container">
                <Switch >
                    <Route exact path="/trips/new" render={ () => <TripInput {...this.props}/> } />
                    <Route path='/trips/:id' render={routerProps => <Trip fetchTrips={this.props.fetchSites}{...routerProps} {...this.props}  /> } />
                    <Route path='/trips' render={routerProps => <Trips {...routerProps} {...this.props} />} />
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
      deleteTrip: id => dispatch(deleteTrip(id)),
      fetchSites: () => dispatch(fetchSites())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(TripsContainer)