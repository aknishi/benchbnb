import React from 'react';
import { Route, Link } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SearchContainer from './search/search_container';

const App = () => (
  <div>
    <header>
      <nav>
        <Link to="/" className="header-link">
          <h1>Bench BnB</h1>
        </Link>
        <GreetingContainer />
      </nav>
    </header>

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={SearchContainer} />
  </div>
);

export default App;
