import React from 'react';
import './App.css';
import TripsContainer from './containers/TripsContainer'
import TripInput from './components/TripInput'
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import { addTrip } from './actions/addTrip'
import NavBar from './components/NavBar';
import { connect } from 'react-redux'


function App(props) {

  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* <Switch> */}
        <Route exact path="/" render={ () => <div>Welcome to Trip Planner!</div> }/>
        <Route exact path="/trips/new" render={ () => <TripInput {...props}/> } />
        <Route exact path="/trips" render={ () => <TripsContainer {...props}/> } />
        {/* <Route path={`/trips/1`} render={ () => <div>Trip Show Page</div>} /> */}
        {/* </Switch> */}
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
      trips: state.trips,
      sites: state.sites    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchTrips: () => dispatch(fetchTrips()),
    addTrip: trip => dispatch(addTrip(trip))
    // deleteTrip: id => dispatch(deleteTrip(id)),
    // fetchSites: () => dispatch(fetchSites())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
