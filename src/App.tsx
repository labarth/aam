import React from 'react';
import { SignIn } from 'Views/Pages/SignIn';
import { SignUp } from 'Views/Pages/SignUp';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default App;
