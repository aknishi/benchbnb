import React from 'react';

class BenchForm extends React.Component {
  constructor(props) {
    super(props)
    this.coords = {lat: props.lat, lng: props.lng};
    this.state = {
      description: '',
      seating: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const bench = Object.assign({}, this.state, this.coords);
    console.log(bench);
    this.props.createBench(bench);
    this.returnToSearch();
  }

  returnToSearch() {
    this.props.history.push("/");
  }

  update(property) {
    return e => this.setState({[property]: e.currentTarget.value})
  }

  render() {
    const { lat, lng } = this.coords;
    return(
      <div className="form-container">
        <div className="new-bench-form">
          <form onSubmit={this.handleSubmit}>
            <h3 className="form-title">Create a Bench!</h3>
            <br/>
            <label className="bench-field">Description:</label>
            <input
              className="bench-field"
              type="text"
              value={this.state.description}
              onChange={this.update('description')}
              />
            <label className="bench-field">Number of Seats:</label>
            <input
              className="bench-field"
              min="2"
              type="number"
              value={this.state.seating}
              onChange={this.update('seating')}
              />
            <label className="bench-field">Latitude</label>
            <input
              className="bench-field"
              type="text"
              disabled
              value={lat}
              />
            <label className="bench-field">Longitude:</label>
            <input
              className="bench-field"
              type="text"
              disabled
              value={lng}
                />
            <div className="button-container">
              <input className="button" type="submit" value="Create Bench" />
              <button className="logout-button" onClick={this.returnToSeach}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default BenchForm;
