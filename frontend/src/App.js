import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import { addTrip } from './actions/addTrip'
import NavBar from './components/NavBar';
import { connect } from 'react-redux'
import TripsContainer from './containers/TripsContainer'


function App(props) {

  return (
    <Router>
      <div className="App">
        <NavBar />
          <Route exact path="/" render={ () => <div className="home">Welcome to Trip Planner!</div> }/>
          <TripsContainer />
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
