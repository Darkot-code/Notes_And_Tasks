import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './components/navigation'
import CreateNote from './components/createNote'
import NotesList from './components/notesList'
import CreateUser from './components/createUser'

function App() {
  return (
    <Router>
      <Navigation/>

    <Route path = "/" exact component = {NotesList} />
    <Route path = "/edit/:id" component = {CreateNote} />
    <Route path = "/create" component = {CreateNote} />
    <Route path = "/user" component = {CreateUser} />

    </Router>
  );
}

export default App;
