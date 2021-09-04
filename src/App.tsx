import { tw } from 'twind';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Login, SignUp, ResetPassword } from 'modules';

export const App = () => {
  return (
    <div className={tw`h-screen flex items-center justify-center bg-gray-50`}>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/reset-password" component={ResetPassword} />
      </Router>
    </div>
  );
};
