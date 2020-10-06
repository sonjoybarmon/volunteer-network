import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvent from './Components/AddEvent/AddEvent';
import Admin from './Components/Admin/Admin';
import Blog from './Components/Blog/Blog';
import Donation from './Components/Donation/Donation';
import Header from './Components/Header/Header';
import HeroArea from './Components/HeroArea/HeroArea';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RegEvent from './Components/RegEvent/RegEvent';
import Register from './Components/Register/Register';

export const UserContext = createContext();

function App() {
  const [loggedInUser , setLoggedInUser] = useState({
      name : '',
      email : '',
      date: '',
      description:'',
      img:''
  });
  return (
    <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
      <Router>
        <Switch>
            <Route exact path='/'>
                <HeroArea></HeroArea>
            </Route>
            <Route path='/home'>
                <HeroArea></HeroArea>
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/RegEvent'>
                <RegEvent />
            </Route>
            <PrivateRoute path='/register/:key'>
                <Register></Register>
            </PrivateRoute>
            <Route path='/register'>
                <Login />
            </Route>
            <Route path='/blog'>
                <Blog />
            </Route>
            <Route path='/events'>
                <RegEvent />
            </Route>
            <Route path='/donation' >
                <Donation />
            </Route>
            <Route path='/admin' >
                <Admin />
            </Route>
            <Route path='/addEvent' >
                <AddEvent />
            </Route>
            <Route path='*' >
                <NotFound />
            </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
