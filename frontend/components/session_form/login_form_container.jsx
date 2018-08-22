import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import React from 'react';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Login',
  navLink: <Link to="/signup">Sign Up</Link>
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
