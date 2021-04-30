import React from 'react';
import { SignIn } from 'Views/Pages/SignIn';
import { SignUp } from 'Views/Pages/SignUp';
import { Route } from 'react-router';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Route exact path="/" component={() => <div>Home Page</div>} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/singup" component={SignUp} />
    </div>
  );
};

export default App;
