import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    console.log(user);
    this.props.processForm(user)
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => <li className='errors' key={error}>{error}</li>)
      );
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render(){
    return (
      <div className="form-container">
        <form className="login-form-box" onSubmit={this.handleSubmit}>
          <ul>
            {this.errors()}
          </ul>
          {this.props.formType} here or {this.props.navLink} instead
          <div className="login-form">
            <br/>
            <label> Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                />
            </label>
            <br/>
            <label> Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                />
            </label>
            <br/>
            <input type="submit" value={this.props.formType} className="button"/>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm)
