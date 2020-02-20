import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { ComponentDidMount } from 'react'
import { fetchTrips } from '../actions/fetchTrips'
import { addTrip } from '../actions/addTrip'
import Trips from '../components/Trips'
import TripInput from '../components/TripInput'


class TripsContainer extends Component {

    componentDidMount() {
        this.props.fetchTrips()
      }

    render() {
        return (
            <div>
                <TripInput addTrip={this.props.addTrip}/>
                <Trips trips={this.props.trips} />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        trips: state.trips
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchTrips: () => dispatch(fetchTrips()),
      addTrip: trip => dispatch(addTrip(trip))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(TripsContainer)