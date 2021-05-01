import React from 'react';
import { SignIn } from 'Views/Pages/SignIn';
import { SignUp } from 'Views/Pages/SignUp';
import { Home } from 'Views/Pages/Home';
import { Route } from 'react-router';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
    </div>
  );
};

export default App;
