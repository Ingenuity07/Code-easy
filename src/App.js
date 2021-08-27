import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../src/App.css'
import Navbar from './Navbar';
import Carousel from './Carousel'
import Footer from './Footer';
import Resources from './Resources';
import Home from './Home';
import User from './User';
import Profile from './Profile';
import { useState } from 'react';

function App() {
  const [profile, setProfile] = useState(false);
  const [userData, setUserData] = useState(null);
  console.log(profile);

  return (
    <Router>
      <div className="App">
        <Navbar profile={profile} setProfile={setProfile} userData={userData} setUserData={setUserData} />
        
        <Switch>
          <Route exact path='/'>
            <Home />
            <Carousel />
          </Route>
          <Route exact path='/resources/:id'>
            <Resources />
          </Route >
          <Route exact path='/User'>
            <User profile={profile} setProfile={setProfile} setUserData={setUserData}  />
          </Route >
          <Route exact path='/Profile'>
            <Profile userData={userData} setUserData={setUserData} />
          </Route >
        </Switch>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
