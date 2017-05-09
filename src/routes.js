import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import EventsPage from './components/events/EventsPage';
console.log("routes");

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="home" component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="events" component={EventsPage} />
  </Route>
);