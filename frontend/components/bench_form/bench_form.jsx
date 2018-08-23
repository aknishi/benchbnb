import React from 'react';

class BenchForm extends React.Component {
  constructor(props) {
    super(props)
    this.coords = {lat: props.lat, lng: props.lng};
    this.state = {
      description: '',
      seating: 2
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const bench = Object.assign({}, this.state, this.coords);
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
        <form className="box" onSubmit={this.handleSubmit}>
          <h3>Create a Bench!</h3>
          <br/>
          <div className="new-bench-form">
            <label>Description:
              <input
                className="bench-field"
                type="text"
                value={this.state.description}
                onChange={this.update('description')}
                />
            </label>
            <label>Number of Seats:
              <input
                className="bench-field"
                min="0"
                type="number"
                value={this.state.seating}
                onChange={this.update('seating')}
                />
            </label>
            <label>Latitude
              <input
                className="bench-field"
                type="text"
                disabled
                value={lat}
                />
            </label>
            <label>Longitude:
              <input
                className="bench-field"
                type="text"
                disabled
                value={lng}
                />
            </label>
            <input type="submit" value="Create Bench" />
            <button onClick={this.returnToSeach}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

export default BenchForm;
