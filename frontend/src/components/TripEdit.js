import React, { Component } from 'react';

class TripEdit extends Component {


    componentDidUpdate(prevProps) {
        if (prevProps.trips.length != this.props.trips.length) {
            let trip = this.getTrip()
            this.setState({
                name: trip.name,
                date: trip.date,
                length: trip.length
            })
        }
    }

    componentDidMount() {
        if (this.props.trips.length > 0) {
        let trip = this.getTrip()

            this.setState({
                name: trip.name,
                date: trip.date,
                length: trip.length
            })
        }
    }

  state = {
    name: '',
    date: '',
    length: ''
  }

  getTrip() {
    return this.props.trips.find(t => t.id == this.props.match.params.id)
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    let editedTrip = {...this.state, id: this.getTrip().id }
    this.props.editTrip(editedTrip);
    this.props.history.push(`/trips/${editedTrip.id}`)
    // this.setState({
    //     name: '',
    //     date: '',
    //     length: ''
    // })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <p>Trip Name: <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleOnChange(event)} /></p>
            <p>Start Date <i>(mm/dd/yyyy)</i>: <input type="text" name="date" value={this.state.date} onChange={(event) => this.handleOnChange(event)} /></p>
            <p>Length <i>(days)</i>: <input type="text" name="length" value={this.state.length} onChange={(event) => this.handleOnChange(event)} /></p>
            <input type="submit" />
        </form>
        <p></p>
      </div>    
    )
  }
}

export default TripEdit
