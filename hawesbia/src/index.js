import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Places from './frontend/Places';
import Place from './frontend/Place';
import Services from './frontend/Services';
import Events from './frontend/Events';
import Home from './frontend/Home';
import About from './frontend/About';
import Contact from './frontend/Contact';
import AllPlaces from './frontend/AllPlaces';



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact render={props => <App {...props} />} />
      
      <Route path='/users/me' exact render={props => <Home {...props} />} />
      <Route path='/about' exact render={props => <About {...props}  />} />
      <Route path='/contact' exact render={props => <Contact {...props}  />} />
      <Route path='/places' exact render={props => <Places {...props}  />} />
      <Route path="/place/:id" exact render={props => <Place {...props}  />}/>
      <Route path='/services' exact render={props => <Services {...props}  />} />
      <Route path='/events' exact render={props => <Events {...props}  />} />
      <Route path='/allPlaces' exact render={props => <AllPlaces {...props}  />} />
    
       
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
