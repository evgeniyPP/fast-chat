import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import Langs from './components/Langs';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import GetRoom from './components/GetRoom';
import { auth } from './firebase';
import { t } from './locale/index';
import './App.css';

function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>
            <Link to="/">{t('Fast Chat')}</Link>
          </h1>
          <Langs />
          <SignOut />
        </header>

        <Switch>
          <Route path="/:id">
            <section>{user ? <ChatRoom /> : <SignIn />}</section>
          </Route>
          <Route path="/">
            <section>{user ? <GetRoom /> : <SignIn />}</section>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
