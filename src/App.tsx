import { tw } from 'twind';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Login, Register, ResetPassword } from 'modules';

const Dashboard = () => {
  return <div>Wellcome to Meteowrite!</div>;
};

export const App = () => {
  // TODO: reroute based on auth state
  return (
    <div className={tw`h-screen flex items-center justify-center bg-gray-50`}>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
    </div>
  );
};
