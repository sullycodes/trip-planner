import React, { Component } from 'react';

class TripInput extends Component {

  state = {
    name: '',
    date: '',
    length: ''
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addTrip(this.state);
    this.setState({
        name: '',
        date: '',
        length: ''
    })
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
      </div>    
    )
  }
}

export default TripInput
