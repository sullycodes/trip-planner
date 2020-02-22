import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTrips } from '../actions/fetchTrips'
import { fetchSites } from '../actions/fetchSites'
import { addTrip } from '../actions/addTrip'
import { deleteTrip } from '../actions/deleteTrip'
import Trips from '../components/Trips'
import TripInput from '../components/TripInput'


class TripsContainer extends Component {

    componentDidMount() {
        // console.log("component did mount...")
        this.props.fetchTrips()
        this.props.fetchSites()
      }

    render() {
        // console.log("checking state for trips...")
        // console.log(this.props.trips)
        // console.log("checking state for sites...")
        // console.log(this.props.sites)
        return (
            <div>
                <TripInput addTrip={this.props.addTrip}/>
                <Trips trips={this.props.trips} deleteTrip={this.props.deleteTrip} />
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